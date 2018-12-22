import React, { Component } from 'react';
import StatusBadge from './StatusBadge';
import TopNav from './TopNav';
import PreviewCard from './PreviewCard';

class App extends Component {
  render() {
    return ( 
      <div id='body'>
        <TopNav />
        <div><h2><p>Rendering Index!</p></h2></div>
        <StatusBadge color='primary' text='Primary Badge' />
        <StatusBadge color='secondary' text='Primary Secondary' />
        <StatusBadge color='dark' text='Primary Dark' />
      <PreviewCard 
        cardId='topIndexCard'
        cardTitleText='Index Card'
        cardSubtitleText='Tope One'
        cardBodyText='MERN - MondoDB, Express, React, NodeJs'
        cardLinkOne='#'
        cardLinkOneText='Link One'
        cardLinkTwo='#'
        cardLinkTwoText='Second Link'
      />
      </div>
    );
  }
}

export default App;
