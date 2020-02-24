import React, { } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Theme Components Import
// Pages
import Index from './Pages/Index'


export const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );

}
