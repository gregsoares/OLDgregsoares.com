import React from 'react'
import { Card } from "./Card";

export const CardSection = () => {

  const showCards = [{
    title: "Javascript",
    body: "Multi-paradigm programming language",
    tags: ["Programming", "Web Development"]
  },
  {
    title: "Back-End",
    body: "Implementation",
    tags: ["API", "Database", "Security"],
  },
  {
    title: "Front-End",
    body: "Presentation Layer",
    tags: ["WYSIWYG", "UX", "UI"],
  }]

  return (
    <div className="flex w-full p-0 py-8 mx-0 bg-gray-200" data-testid="CardSectionContainer">
      <Card cards={showCards[0]} />
      <Card cards={showCards[1]} />
      <Card cards={showCards[2]} />
    </div>
  )
}
