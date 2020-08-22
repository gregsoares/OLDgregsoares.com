import React from "react";

import { CardSection } from "../Components/CardSection/CardSection";
import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { ContactForm } from "../Components/ContactForm/ContactForm";

// TODO: implement Modal on mouse over Resume and Projects
const Index = () => {
  return (
    <main
      className="p-0 m-0 bg-gray-400"
      id="IndexPage"
      data-testid="IndexPageContainer"
    >
      <HeroCTA />
      <FeaturedSection />
      <ContactForm />
    </main>
  );
};

export default Index;
