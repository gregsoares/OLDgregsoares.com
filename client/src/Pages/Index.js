import React, { useState, useEffect } from "react";

import { CardSection } from "../Components/CardSection/CardSection";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { Modal } from "../Components/Modal/Modal";
import { ContactForm } from "../Components/ContactForm/ContactForm";

const Index = () => {
  return (
    <main
      className="p-0 m-0"
      id="IndexPage"
      onLoad={console.log(window.innerWidth)}
      data-testid="IndexPageContainer"
    >
      <Modal
        contentLabel="HelloWorld something TRUE"
        className="shadow-inner box-border py-2 px-4 my-1 mx-2 border bg-gray-300"
        isOpen={false}
      />
      <HeroCTA />
      <FeaturedSection />
      <ContactForm />
      <CardSection />
    </main>
  );
};

export default Index;
