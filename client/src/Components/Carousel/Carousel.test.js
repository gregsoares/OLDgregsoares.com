import React from 'react';
import { render, screen } from "@testing-library/react";
import { Carousel } from "../../Components/Carousel/Carousel";

test('Expect Carousel to render testid: "CarouselContainer"', () => {
  render(<Carousel />);
  const checkComp = screen.getByTestId('CarouselContainer');
  expect(checkComp).toBeInTheDocument();
});