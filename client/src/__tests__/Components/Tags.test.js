import React from 'react';
import { render } from "@testing-library/react";

import { Tags } from "../../Components/CardSection/Tags";

test('Renders Tags (getBytestId:TagsContainer)', () => {
  const { getByTestId } = render(<Tags />)
  const checkId = getByTestId('TagsContainer')
  expect(checkId).toBeInTheDocument();
});

test('Renders Tags props:text (getByText:testText)', () => {
  const { getByDisplayValue } = render(<Tags text="testText"/>)
  const checkId = getByDisplayValue("testText")
  expect(checkId).toBeInTheDocument();
});