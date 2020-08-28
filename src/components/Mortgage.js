import React, { useState } from 'react';
import { PAYMENT_FREQUENCY_OPTIONS } from '../constants/PaymentFrequencyOptions';

export const Mortgage = () => {
  const [mortgageAmt, setMortgageAmt] = useState(50000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(5);
  const [amortizationMonths, setAmortizationMonths] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');

  return (
    <div class="jumbotron">

      <div class="row">
        <div class="col">
          <label htmlFor="basic-url">Mortgage Amount</label>
        </div>
        <div class="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              type="text"
              class="form-control"
              name="Mortgage Amount"
              aria-label="Amount (to the nearest dollar)"
              placeholder="Value nearest to dollar amount"
              value={mortgageAmt}
            />
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label htmlFor="interestRate">Interest Rate</label>
        </div>
        <div class="col">
          <div class="input-group mb-3">
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

      <div class="row">
        <div class="col">
          <label htmlFor="amortizationPeriod">Amortization Period</label>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="amortizationPeriod"
            aria-label="Amortization Period"
            placeholder="Months"
            value={amortizationMonths} />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label htmlFor="paymentFrequency">Payment Frequency</label>
        </div>
        <div class="col">
          <select
            name="paymentFrequency"
            id="paymentFrequency"
            value={paymentFrequency}
          >
            {PAYMENT_FREQUENCY_OPTIONS.map((option) => <option id={option.key} value={option.key}>{option.value}</option>)}
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col">
          Term
        </div>
        <div class="col">
          <select name="term" id="term" value={term}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );

}