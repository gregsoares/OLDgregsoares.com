
import React from 'react';
import { render } from "@testing-library/react";
import { FluidContainer } from "../../Components/FluidContainer/FluidContainer";

  test('Render FluidContainer (byTestId:FluidContainer)', () => {
      const { getByTestId } = render(<FluidContainer />);
      const checkRender = getByTestId('FluidContainer');
      expect(checkRender).toBeInTheDocument();
  });

