import React from 'react';
import { render } from '@testing-library/react';

import Index from '../../Pages/Index';
test('Checking Index by testId', () => {
  const { getByTestId } = render(<Index />);
  const textIdCheck = getByTestId('IndexPageContainer');
  expect(textIdCheck).toBeInTheDocument();
});

// test('Checking for text: Index', () => {
//   const { getByText } = render(<Index />);
//   const textCheck = getByText('Index');
//   expect(textCheck).toBeInTheDocument();
// });