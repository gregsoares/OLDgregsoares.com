import React from 'react'

// ==> Props <==
// text = "Tag Text" (String)

export const Tag = props => {
  const tagPill = (
    <span className="px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full shadow-md nline-block" data-testid="TagsContainer"># <span data-testid="TagsTextDisplay">{props.text}</span></span>
  )
  return (
    <div>
    {props.text != null ? tagPill : '' }
    </div>
  )
}