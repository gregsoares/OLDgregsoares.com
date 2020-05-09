import React from 'react';
import { render } from '@testing-library/react';
import { Container } from '../../Components/Container/Container';

test('Renders Container (byTestId:ContainerComponent)', () => {
  const { getByTestId } = render(<Container />);
  const textCheck = getByTestId('ContainerComponent');
  expect(textCheck).toBeInTheDocument();
});

// TODO: Add rendering of Container with 1+children