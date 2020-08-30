export const calculateMortage = (mortgageAmt, rate, amortizationPeriod, paymentFrequency, term) => {
  const monthlyRateFloat = getMonthlyRate(rate) / 100
  const frequencyfactoredRateFloat = monthlyRateFloat * (12 / paymentFrequency)

  const interestPayment = mortgageAmt * frequencyfactoredRateFloat;

  const numberOfTermPayments = paymentFrequency * term;
  const numberOfTotalPayments = paymentFrequency * amortizationPeriod;
  console.log('noOFPayments : TERM ', numberOfTermPayments)
  console.log('noOFPayments : AMORT', numberOfTotalPayments)

  const totalTermInterestPayments = interestPayment * numberOfTermPayments;
  const totalInterestPayments = interestPayment * numberOfTotalPayments;

  console.log('interest payments : TERM', totalTermInterestPayments)
  console.log('interest payments : AMORT', totalInterestPayments)

  const payment = interestPayment / (1 - Math.pow((1 + frequencyfactoredRateFloat), -numberOfTotalPayments))
  console.log('payment', payment)
  console.log('total cost :: TERM', payment * numberOfTermPayments)
  console.log('total cost :: AMORT', payment * numberOfTotalPayments)
  return { payment, interestPayment }
}

/** Canadian annual rate is compunded semi-annually */
export const getMonthlyRate = rate => {
  const effectiveAnnualRateFloat = Math.pow(1 + rate / 200, 2) - 1;
  const rateMonthyFloat = Math.pow(1 + effectiveAnnualRateFloat, 1 / 12) - 1;
  return rateMonthyFloat * 100
}