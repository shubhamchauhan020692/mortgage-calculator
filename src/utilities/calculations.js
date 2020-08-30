import { summaryCategories } from "../constants/SummaryCategories";

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

export const calculateMortage = (
  mortgageAmt,
  rate,
  amortizationPeriod,
  paymentFrequency,
  term
) => {
  const numberOfTermPayments = paymentFrequency * term;
  const numberOfTotalPayments = paymentFrequency * amortizationPeriod;
  const summaryTableData = [];

  summaryTableData.push({
    category: [summaryCategories.NUMBER_OF_PAYMENTS],
    term: numberOfTermPayments,
    amortization: numberOfTotalPayments,
  });

  const monthlyRateFloat = getMonthlyRate(rate) / 100;
  const frequencyfactoredRateFloat = monthlyRateFloat * (12 / paymentFrequency);

  const interestPayment = mortgageAmt * frequencyfactoredRateFloat;

  const payment =
    interestPayment /
    (1 - Math.pow(1 + frequencyfactoredRateFloat, -numberOfTotalPayments));

  summaryTableData.push({
    category: [summaryCategories.MORTGAGE_PAYMENT],
    term: financial(payment),
    amortization: financial(payment),
  });

  const numberOfTermPaymentsLeft = numberOfTermPayments - 1;
  let termPrincipalPaymentSum = payment - interestPayment;
  let termInterestPaymentSum = interestPayment;
  let endingBalance = mortgageAmt - payment + interestPayment;

  for (let i = 0; i < numberOfTermPaymentsLeft; i++) {
    const nextInterestPayment = parseFloat(
      financial(endingBalance * frequencyfactoredRateFloat)
    );
    const nextPrincipalPayment = parseFloat(
      financial(payment - nextInterestPayment)
    );
    endingBalance =
      parseFloat(endingBalance) -
      parseFloat(payment) +
      parseFloat(interestPayment);
    termInterestPaymentSum += nextInterestPayment;
    termPrincipalPaymentSum += nextPrincipalPayment;
  }

  summaryTableData.push({
    category: [summaryCategories.PRINCIPAL_PAYMENTS],
    term: financial(termPrincipalPaymentSum),
    amortization: financial(mortgageAmt),
  });

  summaryTableData.push({
    category: [summaryCategories.INTEREST_PAYMENTS],
    term: financial(termInterestPaymentSum),
    amortization: financial(numberOfTotalPayments * payment - mortgageAmt),
  });

  summaryTableData.push({
    category: [summaryCategories.TOTAL_COST],
    term: financial(numberOfTermPayments * payment),
    amortization: financial(numberOfTotalPayments * payment),
  });
  console.log("Summary Table Data", summaryTableData);
  return summaryTableData;
};

/** Canadian annual rate is compunded semi-annually */
export const getMonthlyRate = (rate) => {
  const effectiveAnnualRateFloat = Math.pow(1 + rate / 200, 2) - 1;
  const rateMonthyFloat = Math.pow(1 + effectiveAnnualRateFloat, 1 / 12) - 1;
  return rateMonthyFloat * 100;
};
