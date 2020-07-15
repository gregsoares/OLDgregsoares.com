import React from "react";
import { render, screen } from "@testing-library/react";
import { Topnav } from "../../Components/Topnav/Topnav";

describe("Topnav test suiue", () => {
  test("Renders TopnavContainer (byTestId)", () => {
    render(<Topnav />);
    expect(screen.getByTestId("TopnavContainer")).toBeInTheDocument();
  });

  test("Renders Topnav (ByTestId: brandName)", () => {
    render(<Topnav />);
    expect(screen.getByTestId("brandName")).toBeInTheDocument();
  });

  test("Renders Topnav (ByTestId: brandName)", () => {
    render(<Topnav activePage="home" />);
    expect(
      screen.getByTestId("homeNavLink").className.includes("text-black")
    ).toBe(true);
  });
});
