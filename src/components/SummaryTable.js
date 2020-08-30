import React from "react";
import { summaryCategories } from "../constants/SummaryCategories";

export const SummaryTable = ({ summaryTableData }) => (
  summaryTableData.length > 0 && <table className="table table-striped">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Term</th>
        <th scope="col">Amortization</th>
      </tr>
    </thead>
    <tbody>
      {summaryTableData.map((item, index) => (
        <tr key={index}>
          <th scope="row">{item.category}</th>
          <td>{item.term}</td>
          <td>{item.amortization}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

