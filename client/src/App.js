import React, { useState } from 'react';

// Theme Components Import
import { Index } from './components/Plato/Index';
import { About } from './Pages/About';
import { PageChange as Page } from "./hooks/PageChange";

// Original Components imports
// import { Topnav } from './components/Topnav/Topnav';
// import Slider from "./components/Slider/Slider";
// import { Container } from './components/Container/Container';
// import { Deck } from "./components/Deck/Deck";
// import { Jumbotron } from './components/Jumbotron/Jumbotron';
// import Verstand from './components/Verstand/Verstand';
// import ThemeSwitcher, {  } from "./components/ThemeSwitcher/ThemeSwitcher";
// import { ItemCard } from './components/ItemCard/ItemCard';
// import { PriceTable } from "./components/PriceTable/PriceTable";

export const App = () => {
  // TODO: Add on changeState read state of currentPage and reload App.
  // const swapTheme = () => <ThemeSwitcher />
  // const content = req => { }
  return (
    <React.Fragment>


      {/* {<About />} */}
      {/* {<Page current="Home"/>} */}
      {<Index />}
    </React.Fragment>
  );

}
