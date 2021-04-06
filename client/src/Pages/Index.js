import React from "react";

import { FeaturedSection } from "../Components/FeaturedSection/FeaturedSection";
import { HeroCTA } from "../Components/HeroCTA/HeroCTA";
import { ContactForm } from "../Components/ContactForm/ContactForm";

// TODO: implement Modal on mouse over Resume and Projects
const Index = () => {
  return (
    <div id="IndexPage" data-testid="IndexPageContainer">
      <HeroCTA />
      <FeaturedSection />
      <ContactForm />
    </div>
  );
};

export default Index;
