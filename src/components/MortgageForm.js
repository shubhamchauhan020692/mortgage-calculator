import React from "react";
import { helperTexts } from "../constants/Identifiers";
import {
  getTermOptions,
  paymentFrequencyOptions,
} from "../constants/PaymentPlanOptions";

export const MortgageForm = ({ mortgageAmt, rate, amortizationPeriod, paymentFrequency, term, handleInputChange, handleInputBlur, errors }) => {
  return (
    <div id="mortgage-form-container" data-testid="mortgage-form-container" className="jumbotron col-12 col-sm-6">
      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="basic-url">Mortgage Amount</label>
          <a
            href="/#"
            data-tip={helperTexts.MORTGAGE_AMT_HELPER_TEXT}
            className="tooltip-help"
          >
            ?
      </a>
        </div>
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              id="mortgageAmt"
              data-testid="mortgageAmt"
              type="number"
              className="form-control"
              name="mortgageAmt"
              aria-label="Amount (to the nearest dollar)"
              placeholder="Value nearest to dollar amount"
              value={mortgageAmt}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          {errors?.mortgageAmt && (
            <div className="error">{errors?.mortgageAmt}</div>
          )}
        </div>
      </div>

      <div className="row align-items-center mb-3 align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="interestRate">Interest Rate</label>
          <a
            href="/#"
            data-tip={helperTexts.RATE_HELPER_TEXT}
            className="tooltip-help"
          >
            ?
      </a>
        </div>
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">%</span>
            </div>
            <input
              id="rate"
              data-testid="rate"
              type="number"
              className="form-control"
              name="rate"
              aria-label="Interest Rate"
              placeholder="Annual Interest Rate"
              value={rate}
              max={100}
              min={0}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          {errors?.rate && <div className="error">{errors?.rate}</div>}
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="amortizationPeriod">Amortization Period</label>
          <a
            href="/#"
            data-tip={helperTexts.AMORTIZATION_HELPER_TEXT}
            className="tooltip-help"
          >
            ?
      </a>
        </div>
        <div className="col-12 col-sm-6">
          <input
            id="amortizationPeriod"
            data-testid="amortizationPeriod"
            type="number"
            className="form-control"
            name="amortizationPeriod"
            aria-label="Amortization Period"
            placeholder="Years"
            value={amortizationPeriod}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            max={30}
            min={1}
          />
          {errors?.amortizationPeriod && (
            <div className="error">{errors?.amortizationPeriod}</div>
          )}
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="paymentFrequency">Payment Frequency</label>
          <a
            href="/#"
            data-tip={helperTexts.PAYMENT_FREQUENCY_HELPER_TEXT}
            className="tooltip-help"
          >
            ?
      </a>
        </div>
        <div className="col-12 col-sm-6">
          <select
            name="paymentFrequency"
            id="paymentFrequency"
            data-testid="paymentFrequency"
            value={paymentFrequency}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          >
            {paymentFrequencyOptions.map((option, index) => (
              <option id={index} value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row align-items-center mb-3">
        <div className="col-12 col-sm-6">
          <label htmlFor="term">Term</label>
          <a
            href="/#"
            data-tip={helperTexts.TERM_HELPER_TEXT}
            className="tooltip-help"
          >
            ?
      </a>
        </div>
        <div className="col-12 col-sm-6">
          <select
            id="term"
            data-testid="term"
            name="term"
            value={term}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          >
            {getTermOptions().map((option, index) => (
              <option id={index} value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
          {errors?.term && <div className="error">{errors?.term}</div>}
        </div>
      </div>
    </div>
  )
}