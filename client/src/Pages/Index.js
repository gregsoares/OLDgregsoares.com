import React from 'react';

import { Container } from "../Components/Container/Container";
// import { Github } from "../Components/Github/Github";
// import { CalendarCard } from '../Components/CalendarCard/CalendarCard';
// import { CardSection } from '../Components/CardSection/CardSection';
import { Tags } from '../Components/CardSection/Tags';
import { Github } from '../Components/Github/Github';

const Index = () => {

  return (
    <Container>
      <main className="w-full h-full p-0 m-0" id="IndexPage" data-testid="IndexPageContainer">
        <Github />
        {/* <CalendarCard /> */}

        <Tags text='OneTag' />

        <Tags text={null} />
      </main>
    </Container>
  )
}

export default Index;