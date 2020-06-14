import React from 'react';
import { render } from '@testing-library/react';
import { CardSection } from '../../Components/CardSection/CardSection';

test('expects to render Card without errors', () => {
  const { getByTestId } = render(<CardSection />)
  const checkId = getByTestId('CardSectionContainer');
  expect(checkId).toBeInTheDocument();

})
