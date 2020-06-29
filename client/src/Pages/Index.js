import React from 'react';

import { CardSection } from '../Components/CardSection/CardSection';
import { FeaturedSection } from '../Components/FeaturedSection/FeaturedSection';
import { HeroCTA } from '../Components/HeroCTA/HeroCTA';

const Index = () => {

  return (
    <main className="w-full h-full p-0 m-0" id="IndexPage" data-testid="IndexPageContainer">
      <HeroCTA />
      <FeaturedSection />
      <CardSection />

    </main>
  )
}

export default Index;