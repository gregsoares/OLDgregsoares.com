import React from "react";
import expressIcon from "./Expressjs.png";
import mongoIcon from "./mongo.png";
import reactIcon from "./react.png";
import nodeIcon from "./Nodejs.png";

export const IntroCards = (props) => {
  const { cards } = props;
  const loadCards = () => {
    cards && console.log(cards);
    if (cards === undefined) return `No cards given`;
    cards.map((card) => (
      <li className="flex-col px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md">
        <div className="container flex h-20 py-2">
          <img
            className="w-full max-w-xs mx-auto bg-white bg-opacity-25 border border-t-0 border-b-2 border-l-0 border-r-0 rounded-lg border-w-1/5"
            src={cards.imgURL}
            alt="Alt Text"
            srcSet=""
          />
        </div>
        {card.title}
        <span className="text-lg stackDescription">{card.text}</span>
      </li>
    ));
  };

  return (
    <div data-testid="IntroCardsContainer">
      <ul className="flex justify-between text-left">{loadCards()}</ul>
    </div>
  );
};
