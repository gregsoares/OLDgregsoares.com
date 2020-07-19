import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { ContactForm } from "../../Components/ContactForm/ContactForm";

beforeEach(() => cleanup);

// TODO: Add Send message test (fireEvent)

describe("ContactForm test suite", () => {
  test("Renders ContactForm (byTestId)", () => {
    render(<ContactForm />);
    const checkId = screen.getByTestId("ContactFormContainer");
    expect(checkId).toBeInTheDocument();
  });

  test("Renders main label (byText:know)", () => {
    render(<ContactForm />);
    const checkText = screen.getByText(/know/);
    expect(checkText).toBeInTheDocument();
  });

  test('Expect to render byTestId="nameInput"', () => {
    render(<ContactForm />);
    const checkId = screen.getByTestId("nameInput");
    expect(checkId).toBeInTheDocument();
  });

  test('Expect to render byTestId="emailInput"', () => {
    render(<ContactForm />);
    const checkId = screen.getByTestId("emailInput");
    expect(checkId).toBeInTheDocument();
  });

  test('Expect to render byTestId="sendMessageBtn"', () => {
    render(<ContactForm />);
    const checkId = screen.getByTestId("sendMessageBtn");
    expect(checkId).toBeInTheDocument();
  });

  test('Expect to render byTestId="messageBox"', () => {
    render(<ContactForm />);
    const checkId = screen.getByTestId("messageBox");
    expect(checkId).toBeInTheDocument();
  });
});
