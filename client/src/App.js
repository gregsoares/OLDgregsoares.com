import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Layout/IndexLayout/IndexLayout';


class App extends Component {
  render() {
    return (
      <Router>
        <span>
          <Route exact path='/' component={Index} />
        </span>
      </Router>
      
    );
  }
}

export default App;
