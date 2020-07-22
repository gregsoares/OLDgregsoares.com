import React from "react";

import "./Container.css";

export const Container = (props) => {
  const userClass = props.className;
  return (
    <div
      className="w-full bg-gray-300 justify-around px-4 p-3"
      data-testid="ContainerComponent"
    >
      {props.children}
    </div>
  );
};
