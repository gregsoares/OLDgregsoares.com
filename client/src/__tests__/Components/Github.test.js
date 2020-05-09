import React from 'react';
import { render } from "@testing-library/react";

import { Github } from "../../Components/Github/Github";

test('GET: searchRepo', () => {
  const { getByTestId } = render(<Github />)
  const checkId = getByTestId('GithubContainer')
  expect(checkId).toBeInTheDocument();
});

test('Rendering displayResult (byTestId:displayResult)', () => {
  const { getByTestId } = render(<Github />)
  const checkId = getByTestId('displayResult')
  expect(checkId).toBeInTheDocument();
});
