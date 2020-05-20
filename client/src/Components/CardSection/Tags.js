import React from 'react'

// == Props
// text

export const Tags = props => {
  const tagPill = (
    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">{props.text}</span></span>
  )
  return (
    <div>
    {props.text != null ? tagPill : '' }
    </div>
  )
}
