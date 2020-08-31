import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Imports
import { Topnav } from "./Components/Topnav/Topnav";
import { Footer } from "./Components/Footer/Footer";

// Pages Imports
import Index from "./Pages/Index";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Components from "./Pages/Components";

const App = () => {
  useEffect(() => {
    // Put this on .css when ready
    document.getElementById("root").classList.add("brand-lightBlue");
  });
  return (
    <Router>
      <main className="p-0 m-0 brand-lighterBlue">
        <Topnav activePage="home" />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/" component={Index} />
          <Route component={Index} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
