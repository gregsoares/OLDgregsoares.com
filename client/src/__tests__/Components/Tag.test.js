import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tag } from "../../Components/Tag/Tag";

afterEach(() => {
  cleanup;
});

test("Calls Tag props.text = undefined", () => {
  const { findByTestId } = render(<Tag />);
  const checkId = findByTestId("TagContainer");
  expect(checkId.length).toBe(undefined);
});
