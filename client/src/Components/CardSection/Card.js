import React from "react";
import cardImg from "./card-top.jpg";
import { Tag } from "../Tag/Tag";

/* == Props ==
 * string: imgUrl
 * string: title
 * string: text
 * string []: tags
 */
export const Card = (props) => {
  const { imgUrl, title, tags, text } = props.cardData;
  const loadTags = () => {
    if (!tags) return;
    const allTags = tags.map((tag) => <Tag text={tag} key={Math.random()} />);
    return allTags;
  };

  return (
    <div
      className="w-auto py-0 mx-auto my-3 bg-white rounded-md shadow-md y-8 border-1 hover:shadow-lg hover:border-gray-600"
      data-testid="CardContainer"
    >
      <div className="max-w-sm p-1 mx-auto rounded shadow-lg">
        <img
          className="flex w-full p-0 m-0 "
          src={imgUrl || cardImg}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title || "Card Title"}</div>
          <p className="text-base text-gray-600">
            {text ||
              "Card Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae optio animi ex necessitatibus non, suscipit illum corporis. Nam, doloribus."}
          </p>
        </div>
        <div className="px-6 py-4">{loadTags()}</div>
      </div>
    </div>
  );
};
