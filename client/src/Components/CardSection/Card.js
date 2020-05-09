import React from 'react'
import { Tags } from "./Tags";

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
            {props.text.map(tag => <Tags text={tag} />)} 
          </div>
        </div>
      </div>
    )
  }

  return (
    <div data-testid="CardContainer">    {loadCards}</div>
  )
}
