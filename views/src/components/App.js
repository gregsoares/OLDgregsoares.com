import React, { Component } from 'react';
import TopNav from './TopNav';
import PageSection from './PageSection';
import StatusBadge from './StatusBadge';
import PreviewCard from './PreviewCard';

class App extends Component {
  render() {
    return ( 
      <div id='body'>
        <TopNav />
        {/* <PageSection bgColor='bg-secondary' id='sectionOne'> */}
          <div><h2><p>Rendering Index!</p></h2></div>
          <StatusBadge color='primary' text='Primary Badge' />
          <StatusBadge color='secondary' text='Primary Secondary' />
          <StatusBadge color='dark' text='Primary Dark' />
        {/* </PageSection> */}
        {/* <PageSection bgColor='bg-dark' id='sectionTwo'> */}
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
        {/* </PageSection> */}
      </div>
    );
  }
}

export default App;
