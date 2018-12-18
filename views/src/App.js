import React, { Component } from 'react';
// import PreviewCard from './components/PreviewCard';
import StatusBadge from './components/StatusBadge';
import TopNav from './components/TopNav';

class App extends Component {
  render() {
    return ( 
      <div id="body">
        <TopNav />
        <div><h2><p>Rendering Index!</p></h2></div>
        <StatusBadge badgeType="primary" text="Primary Badge" />
      </div>
    );
  }
}

export default App;
