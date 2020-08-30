import React from 'react';
import { fireEvent, cleanup, render } from '@testing-library/react';
import { SummaryTable } from '../SummaryTable';
import { mockSummaryTableData } from '../__mocks_/summaryTableData';
import { Home } from '../Home';

describe('Summary Table', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<SummaryTable summaryTableData={mockSummaryTableData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Summary table correct data should be rendered', () => {
    const { queryByTestId, getAllByText, getByText } = render(<Home />);
    const mortgageAmt = queryByTestId('mortgageAmt')
    const rateInput = queryByTestId('rate')
    const amortizatoinPeriodInput = queryByTestId('amortizationPeriod')
    const paymentFrequencyInput = queryByTestId('paymentFrequency')
    const termInput = queryByTestId('term')
    fireEvent.change(mortgageAmt, { target: { value: '1000000' } });
    fireEvent.change(rateInput, { target: { value: '5' } });
    fireEvent.change(amortizatoinPeriodInput, { target: { value: '25' } });
    fireEvent.change(paymentFrequencyInput, { target: { value: '12' } });
    fireEvent.change(termInput, { target: { value: '5' } });
    fireEvent.blur(mortgageAmt);
    // console.log('getByTestId-000', getByTestId('term-0'))
    expect(getAllByText(/319.73/).length).toEqual(2)
    expect(getByText(/10019.40/)).toBeTruthy();
    expect(getByText(/28348.20/)).toBeTruthy();
    expect(getByText(/38367.78/)).toBeTruthy();
  });
});