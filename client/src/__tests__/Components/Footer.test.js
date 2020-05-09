import React from 'react';
import { render } from "@testing-library/react";
import { Footer } from '../../Components/Footer/Footer';

test('Renders Footer (byTestId:FooterContainer)', () => {
  const { getByTestId } = render(<Footer />)
  const checkId = getByTestId('FooterContainer')
  expect(checkId).toBeInTheDocument();
});

test('Renders Footer (byText:GregSoares.com)', () => {
  const { getByText } = render(<Footer />);
  const checkText = getByText('GregSoares.com');
  expect(checkText).toBeInTheDocument();

});