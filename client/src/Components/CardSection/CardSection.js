import React from "react";
import { Card } from "./Card";

/* == Props ==
 * String: imgURL
 * String: title
 * String: text
 * String []: tags
 */
export const CardSection = (props) => {
  const loadCards = () => {
    if (props.cards) {
      const cardData = props.cards.map((card) => (
        <Card cardData={card} key={Math.random()} />
      ));
      return cardData.map((card) => card);
    }
  };
  return (
    <div
      className="flex flex-wrap w-full p-0 py-6 mx-0 bg-gray-200"
      data-testid="CardSectionContainer"
    >
      {loadCards()}
    </div>
  );
};
