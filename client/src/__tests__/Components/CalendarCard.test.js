import React from 'react';
import { render } from "@testing-library/react";
import { CalendarCard } from "../../Components/CalendarCard/CalendarCard";

describe('Full CalendarCard test suite', () => {
  test('Render basic component (byTestId:CalendarCardContainer)', () => {
      const { getByTestId } = render(<CalendarCard />);
      const checkId = getByTestId('CalendarCardContainer');
      expect(checkId).toBeInTheDocument();
  });
});

