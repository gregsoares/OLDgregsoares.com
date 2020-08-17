import React from "react";
import { Card } from "./Card";

export const CardSection = (props) => {
  const loadCards = () => {
    if (props.cards) {
      const cardData = props.cards.map((card) => (
        <Card cardData={card} key={Math.random()} />
      ));
      return cardData;
    }
  };
  // const mockCardData = {
  //       title: "Javascript",
  //       body: "Multi-paradigm programming language",
  //       text:
  //         "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
  //       tags: ["Programming", "Web Development"],
  //     },
  //     {
  //       title: "Back-End",
  //       body: "Implementation",
  //       text:
  //         "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
  //       tags: ["API", "Database", "Security"],
  //     },
  //     {
  //       title: "Front-End",
  //       body: "Presentation Layer",
  //       text:
  //         "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
  //       tags: ["WYSIWYG", "UX", "UI"],
  //     }

  // const loadCards = () => {
  //   const output = props.cards.map((card) => (
  //     <Card cardData={card} key={Math.random()} />
  //   ));
  //   return output;
  // };

  return (
    <div
      className="flex flex-wrap w-full p-0 py-6 mx-0 bg-gray-200"
      data-testid="CardSectionContainer"
    >
      {props.cards && loadCards.map((card) => card)}
    </div>
  );
};
