import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SummaryTable } from '../SummaryTable';
import { mockSummaryTableData } from '../__mocks_/summaryTableData';

describe('Mortgage', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<SummaryTable summaryTableData={mockSummaryTableData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});