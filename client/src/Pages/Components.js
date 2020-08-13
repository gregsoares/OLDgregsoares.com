import React from "react";
import { CalendarCard } from "../Components/CalendarCard/CalendarCard";
import { Carousel } from "../Components/Carousel/Carousel";
import { Container } from "../Components/Container/Container";
import { FluidContainer } from "../Components/FluidContainer/FluidContainer";
import { Github } from "../Components/Github/Github";
import { MessagesPanel } from "../Components/MessagesPanel/MessagesPanel";
import { PostSection } from "../Components/PostSection/PostSection";
import { Tag } from "../Components/Tag/Tag";
import { Topnav } from "../Components/Topnav/Topnav";
import { CardSection } from "../Components/CardSection/CardSection";
import { ContactForm } from "../Components/ContactForm/ContactForm";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { Footer } from "../Components/Footer/Footer";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { IntroCards } from "../Components/IntroCards/IntroCards";
import { Modal } from "../Components/Modal/Modal";
import { ReviewCard } from "../Components/ReviewCard/ReviewCard";
import { TerminalComp } from "../Components/TerminalComp/TerminalComp";

const Components = () => {
  return (
    <div data-testid="ComponentsContainer">
      <CalendarCard />
      <Carousel />
      <Container />
      <FluidContainer />
      <Github />
      <MessagesPanel />
      <PostSection />
      <Tag />
      <Topnav />
      <CardSection />
      <ContactForm />
      <FeaturedSection />
      <Footer />
      <HeroCTA />

      <Container>
        <div className="md:w-96">
          <IntroCards />
        </div>
      </Container>

      <Modal />
      <ReviewCard />
      <TerminalComp />
    </div>
  );
};

export default Components;
