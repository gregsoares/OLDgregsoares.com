import React from 'react'

// == Props
// text

export const Tags = props => {
  return (
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" key={(Math.random())} data-testid="TagsContainer"># {props.text}</span>
  )
}
