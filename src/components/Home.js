import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Charts } from "./Charts";
import { SummaryTable } from "./SummaryTable";
import { validateInputs } from "../utilities/validate";

import { calculateMortage } from "../utilities/calculations";
import { MortgageForm } from "./MortgageForm";

export const Home = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [amortizationPeriod, setAmortizationPeriod] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState(12);
  const [term, setTerm] = useState(5);
  const [summaryTableData, setSummaryTableData] = useState(5);
  const [errors, setErrors] = useState({
    mortgageAmt: "",
    rate: "",
    amortizationPeriod: "",
    paymentFrequency: "",
    term: "",
  });

  const handleInputChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    switch (e.target.name) {
      case "mortgageAmt": {
        setMortgageAmt(e.target.value);
        break;
      }
      case "rate": {
        setRate(e.target.value);
        break;
      }
      case "amortizationPeriod": {
        setAmortizationPeriod(e.target.value);
        break;
      }
      case "paymentFrequency": {
        setPaymentFrequency(e.target.value);
        break;
      }
      case "term": {
        setTerm(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const handleInputBlur = () => {
    const formErrors = validateInputs(
      mortgageAmt,
      rate,
      amortizationPeriod,
      term
    );
    formErrors &&
      setErrors({
        ...errors,
        ...formErrors,
      });

    /** TODO : If no error only then display */
    const summaryTableData = calculateMortage(100000, 6, 25, 24, 5);
    setSummaryTableData(summaryTableData)
  };

  console.log("errors", errors);
  return (
    <>
      <MortgageForm
        mortgageAmt={mortgageAmt}
        rate={rate}
        amortizationPeriod={amortizationPeriod}
        paymentFrequency={paymentFrequency}
        term={term}
        handleInputChange={handleInputChange}
        handleInputBlur={handleInputBlur}
        errors={errors}
      />
      <SummaryTable summaryTableData={summaryTableData} />
      <Charts />
    </>
  );
};
