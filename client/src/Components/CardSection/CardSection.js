import React from 'react'
import { Card } from "./Card";

export const CardSection = () => {

  // const exampleCard = ( 
  // <div className="w-full p-0 m-0" data-testid="CardSectionContainer">
  //   <div data-testid="CardContainer">
  //       <div className="w-1/4">
  //         <div className="max-w-sm mx-auto my-8 overflow-hidden rounded shadow-lg" data-testid="CardSectionContainer">
  //           <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
  //           <div className="px-6 py-4">
  //             <div className="mb-2 text-xl font-bold">
  //             Card Title
  //             </div>
  //             <p className="text-base text-gray-600">
  //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil veniam minima corporis ipsum? Eaque reprehenderit, neque aliquid modi numquam expedita quo laborum? Vero ex aperiam tempora.
  //             </p>
  //           </div>
  //           <div className="px-6 py-4">
  //             <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Programming</span></span>
  //             <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Javascript</span></span>
  //             <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Web Development</span></span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // </div>
  // )

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
