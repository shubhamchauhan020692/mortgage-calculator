import React from "react";

export const SummaryTable = ({ summaryTableData }) =>
  summaryTableData.length > 0 && (
    <div className="container-fluid">
      <h2 className="diagram-heading">Summary Table</h2>
      <div className="row align-items-center mb-3 mt-3 pr-3 pl-3">
        <table
          id="summary-table"
          data-testid="summary-table"
          className="table table-striped"
        >
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
                <td id={`term-${index}`} data-testid={`term-${index}`}>
                  {item.term}
                </td>
                <td
                  id={`amortization-${index}`}
                  data-testid={`amortization-${index}`}
                >
                  {item.amortization}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
