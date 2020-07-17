import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Imports
import { Topnav } from "./Components/Topnav/Topnav";
import { Footer } from "./Components/Footer/Footer";

// Pages Imports
import Index from "./Pages/Index";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <Router>
      <Topnav activePage />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
