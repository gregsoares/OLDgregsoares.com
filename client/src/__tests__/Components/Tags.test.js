import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { Tags } from "../../Components/CardSection/Tags";

afterEach(() => {
  cleanup
});

  test('Calls Tags props.text = undefined', () => {
    const { findByTestId } = render(<Tags />)
    const checkId = findByTestId('TagsContainer')
    expect(checkId.length).toBe(undefined);
  });