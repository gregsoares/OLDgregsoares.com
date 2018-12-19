import React, { Component } from 'react';
import StatusBadge from './StatusBadge';
import TopNav from './TopNav';
import PreviewCard from './PreviewCard';
// import './index.css';

class App extends Component {
  render() {
    return ( 
      <div id='body'>
        <TopNav />
        <div><h2><p>Rendering Index!</p></h2></div>
        <StatusBadge badgeType='primary' text='Primary Badge' />
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
