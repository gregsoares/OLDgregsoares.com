import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topnav } from '../../Components/Topnav/Topnav';

test('Renders TopnavContainer (byTestId)', () => {
  const { getByTestId } = render(<Topnav />);
  const textCheck = getByTestId('TopnavContainer');
  expect(textCheck).toBeInTheDocument();
});

test('Renders Topnav (ByText:GregSoares.com)', () => {
  const { getByText } = render(<Topnav />);
  const textCheck = getByText('GregSoares.com');
  expect(textCheck).toBeInTheDocument();
});