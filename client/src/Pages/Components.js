import React, { useState } from "react";
import { CalendarCard } from "../Components/CalendarCard/CalendarCard";
import { Carousel } from "../Components/Carousel/Carousel";
import { Container } from "../Components/Container/Container";
import { FluidContainer } from "../Components/FluidContainer/FluidContainer";
import { Github } from "../Components/Github/Github";
import { MessagesPanel } from "../Components/MessagesPanel/MessagesPanel";
import { PostSection } from "../Components/PostSection/PostSection";
import { CardSection } from "../Components/CardSection/CardSection";
import { IntroCards } from "../Components/IntroCards/IntroCards";
import { Modal } from "../Components/Modal/Modal";
import { ReviewCard } from "../Components/ReviewCard/ReviewCard";
import { TerminalComp } from "../Components/TerminalComp/TerminalComp";
import { Blog } from "../Components/Blog/Blog";
import { cardData } from "./mockPagesData";
import { testBlogs } from "./mockPagesData";
import { LazyLoader } from "../Components/LazyLoader/LazyLoader";

const Components = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div data-testid="ComponentsContainer">
      {/* <Blog
        blogTitle="Blog"
        blogSubtitle="Future Project preview section"
        blogs={testBlogs}
      /> */}
      <CalendarCard />
      <Modal />
      <Carousel />
      <Container />
      <FluidContainer />
      <Github />
      <MessagesPanel title="Message Panel" status="Testing" date="date" />
      <PostSection />
      <CardSection cards={cardData} />

      <div className="md:w-96">
        <IntroCards cards={cardData} />
      </div>

      <ReviewCard
        title="Review Card"
        status="Status"
        date="Today"
        comment="Reusable, Responsive, Rocking"
        initials="GS"
        position="Dev"
        name="Greg Soares"
        jobTitle="Web Dev"
      />
      <TerminalComp />
      <LazyLoader />
    </div>
  );
};

export default Components;
