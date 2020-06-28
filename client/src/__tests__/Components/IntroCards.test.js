import React from 'react';
import { render } from "@testing-library/react";
import { IntroCards } from "../../Components/IntroCards/IntroCards";

describe('Full IntroCards test suite', () => {
  test('Render basic component (byTestId:IntroCardsContainer)', () => {
      const { getByTestId } = render(<IntroCards />);
      const checkId = getByTestId('IntroCardsContainer');
      expect(checkId).toBeInTheDocument();
  });
});


