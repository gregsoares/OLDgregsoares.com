import React from "react";
// import expressIcon from "./Expressjs.png";
// import mongoIcon from "./mongo.png";
// import reactIcon from "./react.png";
// import nodeIcon from "./Nodejs.png";

export const IntroCards = (props) => {
  const { cards } = props;
  const loadCards = () => {
    if (cards) {
      const cardDeck = cards.map((card) => (
        <div
          className="flex px-4 mx-2 my-4 text-xl border border-gray-600 border-sm focus:border-white hover:border-white hover:border-md"
          key={Math.random()}
        >
          <div className="container h-20 py-2">
            <img
              className="w-full max-w-xs mx-auto bg-white bg-opacity-25 border border-t-0 border-b-2 border-l-0 border-r-0 rounded-lg"
              src={cards.imgURL}
              alt="Alt Text"
              srcSet=""
            />
          </div>
          {card.title}
          <span className="text-lg stackDescription">{card.text}</span>
        </div>
      ));
      return cardDeck;
    }
    return ["Please provide card data"];
  };

  return (
    <div
      className="flex-wrap flex justify-between text-left"
      data-testid="IntroCardsContainer"
    >
      {loadCards()}
    </div>
  );
};
