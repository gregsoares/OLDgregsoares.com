import React from 'react';
import { render } from "@testing-library/react";
import { FeaturedSection } from "../../Components/FeaturedSection/FeaturedSection";

describe('Full FeaturedSection test suite', () => {
  test('Render basic component (byTestId:FeaturedSectionContainer)', () => {
      const { getByTestId } = render(<FeaturedSection />);
      const checkId = getByTestId('FeaturedSectionContainer');
      expect(checkId).toBeInTheDocument();
  });
});

