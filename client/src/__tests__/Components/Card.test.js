import React from 'react';
import { render } from "@testing-library/react";
import { Card } from "../../Components/CardSection/Card";

describe('Full Card test suite', () => {
  test('Render basic component (byTestId:CardContainer)', () => {
      const { getByTestId } = render(<Card />);
      const checkRender = getByTestId('CardContainer');
      expect(checkRender).toBeInTheDocument();
  });
});

