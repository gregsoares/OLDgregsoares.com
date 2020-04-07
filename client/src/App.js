import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './Styles/app.css';
// Context

// Temp GeneralHeaders import

// Theme Components Import

// Pages
import Index from './Pages/Index'


export const App = () => {

  // const [currentPage, setCurrentPage] = useState();
  // const TopNavComp = useCallback(<TopNav />, [currentPage]);

  return (
    <Router>
      {/* {TopNavComp} */}
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );

}
