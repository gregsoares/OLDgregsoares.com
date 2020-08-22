import React from "react";

// ==> Props <==
// text = "Tag Text" (String)

// NOTE: Add hover:/onClick show Tooltip/Modal with brief info.
export const Tag = (props) => {
  const tagPill = (
    <span
      className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full shadow-md nline-block"
      data-testid="TagContainer"
    >
      #<span data-testid="TagsTextDisplay">{props.text}</span>
    </span>
  );
  return (
    <div className="hover:shadow-md">
      {props.text != null ? tagPill : <Tag text="NoText" />}
    </div>
  );
};
