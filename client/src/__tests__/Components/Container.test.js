import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from '../../Components/Container/Container';

test('Renders Container (byTestId:ContainerComponent)', () => {
  const { getByTestId } = render(<Container />);
  const textCheck = getByTestId('ContainerComponent');
  expect(textCheck).toBeInTheDocument();
});
test('Renders Container (byText:Container)', () => {
  const { getByText } = render(<Container />);
  const textCheck = getByText('Container');
  expect(textCheck).toBeInTheDocument();
});