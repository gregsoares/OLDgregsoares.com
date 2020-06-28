import React from 'react';
import { render } from "@testing-library/react";
import { HeroCTA } from "../../Components/HeroCTA/HeroCTA";

describe('Full HeroCTA test suite', () => {
  test('Render basic component (byTestId:HeroCTAContainer)', () => {
      const { getByTestId } = render(<HeroCTA />);
      const checkId = getByTestId('HeroCTAContainer');
      expect(checkId).toBeInTheDocument();
  });

  test('Expects "Networking" from li (geByTestId="CTA_list_container)', () => {
    const { getByTestId, getByText } = render(<HeroCTA />);
    let checkText = getByTestId('CTA_list_container');
    expect(checkText.firstChild.textContent).toContain('Networking')
  });
});

