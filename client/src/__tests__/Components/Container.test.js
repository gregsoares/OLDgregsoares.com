import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { Container } from '../../Components/Container/Container';

test('Renders Content Container', () => {
  const { getByTestId } = render(<Container />);
  const dataTest = getByTestId('ContainerComponent')
  expect(dataTest).toBeInTheDocument();
});
