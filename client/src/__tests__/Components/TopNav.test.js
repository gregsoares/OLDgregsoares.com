import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topnav } from '../../Components/Topnav/Topnav';

test('Renders TopnavContainer (byTestId)', () => {
  render(<Topnav />);
  expect(screen.getByTestId('TopnavContainer')).toBeInTheDocument();
});

test('Renders Topnav (ByTestId: brandName)', () => {
  render(<Topnav />);
  expect(screen.getByTestId('brandName')).toBeInTheDocument();
});