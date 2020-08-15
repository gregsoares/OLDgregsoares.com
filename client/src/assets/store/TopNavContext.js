import React, { createContext, useState } from "react";

const values = {
  width: window.innerWidth,
  setWidth: (num) => (values.width = num),

  activePage: "home",
  setActivePage: (name) => (values.activePage = name),
};
export const TopNavContext = createContext({
  width: values.width,
  setWidth: values.setWidth,

  activePage: values.activePage,
  setActivePage: values.setActivePage,
});
