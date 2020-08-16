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
import { Blog } from "../Components/Blog/Blog";

const Components = () => {
  const testBlogs = [
    {
      imgURL: "https://via.placeholder.com/10",
      text: "test",
      date: "test",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      text: "test",
      date: "test",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      text: "test",
      date: "test",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      text: "test",
      date: "test",
    },
  ];
  const cardData = [
    {
      imgURL: "https://via.placeholder.com/10",
      title: "Good Title",
      text:
        "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      title: "Good Title",
      text:
        "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      title: "Good Title",
      text:
        "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
    },
    {
      imgURL: "https://via.placeholder.com/10",
      title: "Good Title",
      text:
        "lorem ipsum yeah sum stuff coaglatolorem ipsum yeah sum stuff coaglator rlorem ipsum yeah sum stuff coaglator",
    },
  ];
  return (
    <div data-testid="ComponentsContainer">
      <Blog
        blogTitle="Blog"
        blogSubtitle="Future Project preview section"
        blogs={testBlogs}
      />
      <CalendarCard />
      <Carousel />
      <Container />
      <FluidContainer />
      <Github />
      <MessagesPanel title="Message Panel" status="Testing" date={new Date()} />
      <PostSection />
      <Tag />
      <Topnav />
      <CardSection cards={cardData} />
      <ContactForm />
      <FeaturedSection />
      <Footer />
      <HeroCTA />

      <div className="md:w-96">
        <IntroCards cards={cardData} />
      </div>

      <Modal />
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
    </div>
  );
};

export default Components;
