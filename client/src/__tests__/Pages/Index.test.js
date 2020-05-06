import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topnav } from '../../Components/Topnav/Topnav';

import { findByTestAttr } from "../../testUtils";

import Index from '../../Pages/Index';
test('Checking Index by testId', () => {
  const { getByTestId } = render(<Index />);
  const textIdCheck = getByTestId('IndexPageContainer');
  expect(textIdCheck).toBeInTheDocument();
});

test('Checking for text: Index', () => {
  const { getByText } = render(<Index />);
  const textCheck = getByText('Index');
  expect(textCheck).toBeInTheDocument();
});