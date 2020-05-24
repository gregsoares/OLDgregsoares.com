import React from 'react';
import { render } from "@testing-library/react";
import { HeroCTA } from "../../Components/HeroCTA/HeroCTA";

describe('Full HeroCTA test suite', () => {
  test('Render basic component (byTestId:HeroCTAContainer)', () => {
      const { getByTestId } = render(<HeroCTA />);
      const checkId = getByTestId('HeroCTAContainer');
      expect(checkId).toBeInTheDocument();
  });
});

