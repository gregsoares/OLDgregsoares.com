import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topnav } from '../../Components/Topnav/Topnav';

test('Renders TopnavContainer (byTestId)', () => {
  render(<Topnav />);
  expect(screen.getByTestId('TopnavContainer')).toBeInTheDocument();
});

test('Renders Topnav (ByText:GregSoares.com)', () => {
  render(<Topnav />);
  expect(screen.getByText('GregSoares.com')).toBeInTheDocument();
});