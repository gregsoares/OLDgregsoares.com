import React from 'react';

// import { Container, Row, Col } from 'reactstrap';

// import components
import TopNav from '../../TopNav/TopNav';
import Footer from '../../Footer/Footer';
import CardSection from '../../CardSection/CardSection';
import TopHero from '../../TopHero/TopHero';
import BodySection from '../../BodySection/BodySection';

require ('../../../assets/css/main.css');

export default class IndexLayout extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <TopNav />
        <TopHero />
        <BodySection />
        <CardSection />
        <Footer />
      </div>
      );
  }
}