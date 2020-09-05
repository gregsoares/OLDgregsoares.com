import React, { createContext } from "react";

export const TopNavContext = () => {
  const values = {
    width: window.innerWidth,
    setWidth: (num) => (values.width = num),

    activePage: "home",
    setActivePage: (name) => (values.activePage = name),
  };
  const context = createContext({
    width: values.width,
    setWidth: () => values.setWidth(window.innerWidth),

    activePage: values.activePage,
    setActivePage: (n) => values.setActivePage(n),
  });
  return context;
};
