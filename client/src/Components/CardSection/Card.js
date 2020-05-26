import React from 'react'
// import { Tags } from "./Tags";
import cardImg from './card-top.jpg';
// == Props ==
//  [] of JSON Obj => cards.    title, body, tags[]

export const Card = props => {

  // const loadCards = () => {
  //   if (props.cards.length === 0) return '';

  //   props.cards.map(data =>
  //     <div className="w-4" key={(Math.random())}>
  //       <div className="max-w-sm mx-auto my-8 overflow-hidden rounded shadow-lg" data-testid="CardSectionContainer">
  //         <img className="w-full" src={cardImg} alt="Sunset in the mountains" />
  //         <div className="px-6 py-4">
  //           <div className="mb-2 text-xl font-bold">
  //             {data.title}
  //           </div>
  //           <p className="text-base text-gray-600">
  //             {data.body}
  //           </p>
  //         </div>
  //         <div className="px-6 py-4">
  //           {/* {props.text.map(tag => <Tags text={tag} />)}  */}
  //           {props.text.map(tag => <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">{tag}</span></span>)}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="w-auto py-0 mx-auto my-0 bg-white rounded-md shadow-md y-8 border-1" data-testid="CardContainer">
      {/* {loadCards} */}

      <div className="max-w-sm p-1 mx-auto rounded shadow-lg">
        <img className="flex w-full p-0 m-0 " src={cardImg} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            Card Title
              </div>
          <p className="text-base text-gray-600">
            Card Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae optio animi ex necessitatibus non, suscipit illum corporis. Nam, doloribus.
              </p>
        </div>
        <div className="px-6 py-4">
          {/* {props.text.map(tag => <Tags text={tag} />)}  */}
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Programming</span></span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">JavaScript</span></span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Web Development</span></span>
        </div>
      </div>

    </div>
  )
}
