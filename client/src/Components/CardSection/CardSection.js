import React from 'react'
import { Card } from "./Card";

export const CardSection = () => {

  const showCards = [{
    title: "Javascript",
    body: "Multi-paradigm programming language",
    tags: ["Programming", "Web Development"]
  },
  {
    title: "Front-End",
    body: "Presentation Layer",
    tags: ["WYSIWYG", "UX", "UI"],
}]

  // const exampleCard = (
  //   <div className="w-1/4">
  //     <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" data-testid="CardSectionContainer">
  //       <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
  //       <div className="px-6 py-4">
  //         <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
  //         <p className="text-gray-600 text-base">
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //   </p>
  //       </div>
  //       <div className="px-6 py-4">
  //         <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#photography</span>
  //         <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#travel</span>
  //         <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#winter</span>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="w-full p-0 m-0" data-testid="CardSectionContainer">
    {/* {console.debug(showCards.map(card => card.tags))} */}
      <Card cards={{showCards}} />
    </div>
  )
}
