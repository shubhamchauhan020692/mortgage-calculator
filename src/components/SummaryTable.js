import React, { useState } from 'react';
import { PAYMENT_FREQUENCY_OPTIONS } from '../constants/PaymentFrequencyOptions';
import ReactTooltip from 'react-tooltip';
import { summaryCategories } from '../constants/SummaryCategories';

export const SummaryTable = () => {
  const data = [{
    category: [summaryCategories.NUMBER_OF_PAYMENTS],
    term: "36",
    amortization: "49",
  },
  {
    category: [summaryCategories.MORTGAGE_PAYMENT],
    term: "224",
    amortization: "429",
  },
  {
    category: [summaryCategories.PRINCIPAL_PAYMENTS],
    term: "55",
    amortization: "33",
  },
  {
    category: [summaryCategories.INTEREST_PAYMENTS],
    term: "36",
    amortization: "49",
  },
  {
    category: [summaryCategories.TOTAL_COST],
    term: "36",
    amortization: "49",
  }];
  
return (
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Term</th>
        <th scope="col">Amortization</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr>
          <th scope="row">{item.category}</th>
          <td>{item.term}</td>
          <td>{item.amortization}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
}