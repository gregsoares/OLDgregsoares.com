import React, { Component } from 'react';
// import PreviewCard from './components/PreviewCard';
// import StatusBadge from './components/StatusBadge';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return ( 
      <div id="body">
        <TopNav />
        <div><p><h2>Rendering Index!</h2></p></div>
      </div>
    );
  }
}

export default App;
