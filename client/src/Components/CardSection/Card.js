import React from 'react'
// import { Tags } from "./Tags";

// == Props ==
//  [] of JSON Obj => cards.    title, body, tags[]

export const Card = props => {

  const loadCards = () => {
    if (props.cards.length === 0) return '';

    props.cards.map(data =>
      <div className="w-1/4" key={(Math.random())}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" data-testid="CardSectionContainer">
          <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {data.title}
            </div>
            <p className="text-gray-600 text-base">
              {data.body}
            </p>
          </div>
          <div className="px-6 py-4">
            {/* {props.text.map(tag => <Tags text={tag} />)}  */}
            {props.text.map(tag => <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">{tag}</span></span>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div data-testid="CardContainer">
      {/* {loadCards} */}

        <div className="w-1/4" >
          <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
            <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
              Card Title 
              </div>
              <p className="text-gray-600 text-base">
              Card Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae optio animi ex necessitatibus non, suscipit illum corporis. Nam, doloribus.
              </p>
            </div>
            <div className="px-6 py-4">
              {/* {props.text.map(tag => <Tags text={tag} />)}  */}
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Programming</span></span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">JavaScript</span></span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">Web Development</span></span>
            </div>
          </div>
        </div>

      {/* <div className="w-1/4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8" data-testid="CardSectionContainer">
                <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                  {props.title !== null ? props.title : "No title"}
                  </div>
                  <p className="text-gray-600 text-base">
                    {props.body !== null ? props.body : "No Description"}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer">#
                   <span data-testid="TagsTextDisplay">
                      Programming
                   </span>
                  </span>
                </div>
              </div>
            </div> */}
    </div>
  )
}
