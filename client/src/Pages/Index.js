import React from 'react';

// import { Container } from "../Components/Container/Container";
import { CalendarCard } from '../Components/CalendarCard/CalendarCard';
import { CardSection } from '../Components/CardSection/CardSection';
import { Tags } from '../Components/CardSection/Tags';
import { Github } from '../Components/Github/Github';
import { FeaturedSection } from '../Components/FeaturedSection/FeaturedSection';
import { HeroCTA } from '../Components/HeroCTA/HeroCTA';
// import { Carousel } from '../Components/Carousel/Carousel';


const Index = () => {

  return (
      <main className="w-full h-full p-0 m-0" id="IndexPage" data-testid="IndexPageContainer">
        <HeroCTA />
        <FeaturedSection />
        <CardSection />

        {/* <Carousel /> */}
        {/* <Github /> */}
        <CalendarCard />

        <Tags text='OneTag' />

        <Tags text={null} />
      </main>
  )
}

export default Index;