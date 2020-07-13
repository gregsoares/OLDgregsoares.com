import React from "react";
import { render } from "@testing-library/react";
import { Intro } from "../../Components/Intro/Intro";

test('expect to getByTestId: introContainer', () => {
 const { getByTestId } = render(<Intro />);
 const checkId = getByTestId('IntroContainer');
 expect(checkId).toBeInTheDocument();
    
})
