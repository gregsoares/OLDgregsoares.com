import React from 'react';

// Theme Components Import
import { Index } from './components/Plato/Index';

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

  // const Headers = () => {
  //   return (
  //     <React.Fragment>
  //         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" /> 
  //         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" /> 
  //         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous" /> 
  //         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous" />

  //     </React.Fragment>
  //   )
  // }

  // TODO: Add on changeState read state of currentPage and reload App.
  // const swapTheme = () => <ThemeSwitcher />
  // const content = req => { }
  return (
    <React.Fragment>
      {/* Original Components Implementation */}
      {/* <Headers /> */}
      {/* <Topnav current='Home'/> */}
      {/* <Container Content={<Topnav current='Github'/>} /> */}
      {/* <Container Content={<Deck />} /> */}
      {/* <Container Content={<ItemCard />} /> */}
      {/* <Container Content={<PriceTable />} /> */}
      {/* -----------------
-------------------- */}

    {<Index />}
    </React.Fragment>
  );

}
