import React from 'react';
import { render } from '@testing-library/react';
import { ContactForm } from "../../Components/ContactForm/ContactForm";

test('Renders ContactForm (byTestId)', () => {
  const { getByTestId } = render(<ContactForm />)
  const checkId = getByTestId('ContactFormContainer')
  expect(checkId).toBeInTheDocument();
});

test('Renders main label (byText:know)', () => {
  const { getByText } = render(<ContactForm />)
  const checkText = getByText(/know/)
  expect(checkText).toBeInTheDocument();
  });