import React from "react";
import { render } from "@testing-library/react";
import About from "../../Pages/About";

test('Render About Page', () => {
  const { getByTestId } = render(<About />)
  const textCheck = getByTestId('AboutPageContainer');
  expect(textCheck).toBeInTheDocument();

});

// test('Checks for content in: About Page', () => {
//   const { getByText } = render(<About />)
//   expect(getByText(('About Page'))).toBeInTheDocument();
//   // expect(content).toBeInTheDocument();

// });