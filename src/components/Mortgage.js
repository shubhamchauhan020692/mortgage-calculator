import React, { useState } from 'react';
import { PAYMENT_FREQUENCY_OPTIONS } from '../constants/PaymentFrequencyOptions';
import ReactTooltip from 'react-tooltip';
import { Charts } from './Charts';
import { SummaryTable } from './SummaryTable';

export const Mortgage = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(5);
  const [amortizationMonths, setAmortizationMonths] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');

  const handleInputChange = e => {
    console.log('e.target.value',e.target.value);
    setMortgageAmt(e.target.value)
  }
  return (
    <>
    <div class="jumbotron col-12 col-sm-6">
        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="basic-url">Mortgage Amount</label>
            <a href='@' data-tip='custom show' data-event='click focus'>?</a>
            <ReactTooltip globalEventOff='click' />
          </div>
          <div class="col-12 col-sm-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                type="number"
                class="form-control"
                name="mortgageAmt"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Value nearest to dollar amount"
                value={mortgageAmt}
                onChange={handleInputChange}
              />
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center mb-3 align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="interestRate">Interest Rate</label>
          </div>
          <div class="col-12 col-sm-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">%</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="interestRate"
                aria-label="Interest Rate"
                value={rate}
              />
            </div>
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="amortizationPeriod">Amortization Period</label>
          </div>
          <div class="col-12 col-sm-6">
            <input
              type="text"
              class="form-control"
              id="amortizationPeriod"
              aria-label="Amortization Period"
              placeholder="Months"
              value={amortizationMonths} />
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            <label htmlFor="paymentFrequency">Payment Frequency  </label>
            <a data-tip="React-toolssstip" className='tooltip-help'>?</a>
            <ReactTooltip place="top" type="dark" effect="float"/>
          </div>
          <div class="col-12 col-sm-6">
            <select
              name="paymentFrequency"
              id="paymentFrequency"
              value={paymentFrequency}
            >
              {PAYMENT_FREQUENCY_OPTIONS.map((option, index) => <option id={index} value={option.value}>{option.label}</option>)}
            </select>
          </div>
        </div>

        <div class="row align-items-center mb-3">
          <div class="col-12 col-sm-6">
            Term
        </div>
          <div class="col-12 col-sm-6">
            <select name="term" id="term" value={term}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      
      </div>
      <SummaryTable />
      <Charts />
     
    </>
  );

}