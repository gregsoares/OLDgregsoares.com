import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Imports
import { Topnav } from "./Components/Topnav/Topnav";

// Pages Imports
import Index from "./Pages/Index";
import About from "./Pages/About";


const App = () => {
  return (
    <Router>
      <Topnav />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>


  );
}

export default App;
