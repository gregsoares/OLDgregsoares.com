import React from "react";
import { render, screen, getByTestId } from "@testing-library/react";
import { CardSection } from "../../Components/CardSection/CardSection";

test('Render CardSection (ByTestId:CardSectionContainer)', () => {
  const { getByTestId } = render(<CardSection />)
  const checkComponent = getByTestId('CardSectionContainer')
  expect(checkComponent).toBeInTheDocument()
});

// FIXME: test CardSection with props
// test('Render CardSection prop:"cards" (By???:??)', () => {
//   const showCards = [{
//     title: "Javascript",
//     body: "Multi-paradigm programming language",
//     tags: ["Programming", "Web Development"]
//   },
//   {
//     title: "Front-End",
//     body: "Presentation Layer",
//     tags: ["WYSIWYG", "UX", "UI"],
//   }]

//   const { getByDisplayValue } = render(<CardSection cards={showCards}/>)
//   const checkComponent = getByDisplayValue('Javascript')
//   expect(checkComponent).toBeInTheDocument()
// });