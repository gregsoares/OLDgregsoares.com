import React from 'react';
import { render, cleanup } from "@testing-library/react";
import renderer from 'react'

import { Tags } from "../../Components/CardSection/Tags";

afterEach(() => {
  cleanup
});
describe('Invalid Input tests all expect Undefined', () => {
  test('Calls Tags props.text = undefined', () => {
    const { findByTestId } = render(<Tags />)
    const checkId = findByTestId('TagsContainer')
    expect(checkId.length).toBe(undefined);
  });
  
    test('Renders Tags props.text = null', () => {
    const { findByTestId } = render(<Tags text={null} />)
    const checkId = findByTestId('TagsContainer')
    expect(checkId.length).toBe(undefined);
  });
  
    test('Renders Tags props.text = ""', () => {
    const { findByTestId } = render(<Tags text=''/>)
    const checkId = findByTestId('TagsContainer')
    expect(checkId.length).toBe(undefined);
  });
  

});

test('Renders Tags props:text (getByText:testText)', () => {
  const { getByText } = render(<Tags text="testText"/>)
  const checkId = getByText("testText")
  expect(checkId).toBeTruthy();
});