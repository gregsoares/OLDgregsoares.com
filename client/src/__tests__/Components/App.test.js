import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";

afterEach(() => {
  cleanup;
});

describe("Full Routes test suite", () => {
  test("should load index", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Expected index on first load
    expect(screen.getByTestId("IndexPageContainer")).toBeInTheDocument();
  });
});
