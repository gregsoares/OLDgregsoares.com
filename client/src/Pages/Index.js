import React from 'react';

import { Container } from "../Components/Container/Container";
// import { Github } from "../Components/Github/Github";
import { CalendarCard } from '../Components/CalendarCard/CalendarCard';
import { CardSection } from '../Components/CardSection/CardSection';
import { Tags } from '../Components/CardSection/Tags';

const Index = () => {

  return (
    <Container>
      <main className="w-full h-full p-0 m-0" id="IndexPage" data-testid="IndexPageContainer">
        <CalendarCard />

        <Tags text='OneTag' />
        <CardSection />

      </main>
    </Container>
  )
}

export default Index;