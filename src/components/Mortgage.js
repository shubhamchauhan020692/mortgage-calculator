import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Charts } from './Charts';
import { SummaryTable } from './SummaryTable';
import { validateInputs } from '../utilities/validate';
import { getTermOptions, paymentFrequencyOptions } from '../constants/PaymentPlanOptions';
import { helperTexts } from '../constants/Identifiers';

export const Mortgage = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [amortizationPeriod, setAmortizationPeriod] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [term, setTerm] = useState(5);
  const [errors, setErrors] = useState({
    mortgageAmt: '',
    rate: '',
    amortizationPeriod: '',
    paymentFrequency: '',
    term: '',
  })

  const handleInputChange = e => {
    console.log('e.target.value', e.target.value);
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
    switch (e.target.name) {
      case "mortgageAmt": { setMortgageAmt(e.target.value); break; }
      case "rate": { setRate(e.target.value); break; }
      case "amortizationPeriod": { setAmortizationPeriod(e.target.value); break; }
      case "paymentFrequency": { setPaymentFrequency(e.target.value); break; }
      case "term": { setTerm(e.target.value); break; }
      default: return;
    }
  }

  const handleInputBlur = () => {
    const formErrors = validateInputs(mortgageAmt, rate, amortizationPeriod, term);
    formErrors && setErrors({
      ...errors,
      ...formErrors
    })
  }

  console.log('errors', errors)
  return (
    <>
      <div class="jumbotron col-12 col-sm-6">
        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="basic-url">Mortgage Amount</label>
            <a href="/#" data-tip={helperTexts.MORTGAGE_AMT_HELPER_TEXT} className='tooltip-help'>?</a>
          </div>
          <div class="col-12 col-sm-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                id="mortgageAmt"
                type="number"
                class="form-control"
                name="mortgageAmt"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Value nearest to dollar amount"
                value={mortgageAmt}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
            {errors?.mortgageAmt && <div class="error">{errors?.mortgageAmt}</div>}
          </div>
        </div>

        <div class="row align-items-center mb-3 align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="interestRate">Interest Rate</label>
            <a href="/#" data-tip={helperTexts.RATE_HELPER_TEXT} className='tooltip-help'>?</a>
          </div>
          <div class="col-12 col-sm-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">%</span>
              </div>
              <input
                id="rate"
                type="number"
                class="form-control"
                name="rate"
                aria-label="Interest Rate"
                placeholder="Annual Interest Rate"
                value={rate}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            {errors?.rate && <div class="error">{errors?.rate}</div>}
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="amortizationPeriod">Amortization Period</label>
            <a href="/#" data-tip={helperTexts.AMORTIZATION_HELPER_TEXT} className='tooltip-help'>?</a>
          </div>
          <div class="col-12 col-sm-6">
            <input
              id="amortizationPeriod"
              type="number"
              class="form-control"
              name="amortizationPeriod"
              aria-label="Amortization Period"
              placeholder="Years"
              value={amortizationPeriod}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors?.amortizationPeriod && <div class="error">{errors?.amortizationPeriod}</div>}
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="paymentFrequency">Payment Frequency</label>
            <a href="/#" data-tip={helperTexts.PAYMENT_FREQUENCY_HELPER_TEXT} className='tooltip-help'>?</a>
          </div>
          <div class="col-12 col-sm-6">
            <select
              name="paymentFrequency"
              id="paymentFrequency"
              value={paymentFrequency}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            >
              {paymentFrequencyOptions.map((option, index) => <option id={index} value={option.value}>{option.label}</option>)}
            </select>
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="paymentFrequency">Term</label>
            <a href="/#" data-tip={helperTexts.TERM_HELPER_TEXT} className='tooltip-help'>?</a>
          </div>
          <div class="col-12 col-sm-6">
            <select
              id="term"
              name="term"
              value={term}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            >
              {getTermOptions().map((option, index) => <option id={index} value={option.value}>{option.label}</option>)}
            </select>
            {errors?.term && <div class="error">{errors?.term}</div>}
          </div>
        </div>

      </div>
      <SummaryTable />
      <Charts />

    </>
  );

}