import React from "react";

// Project Components import
import { TerminalComp } from "../Components/TerminalComp/TerminalComp";
import { CardSection } from "../Components/CardSection/CardSection";
import { ReviewCard } from "../Components/ReviewCard/ReviewCard";

const Projects = () => {
  return (
    <div className="items-center justify-center bg-gray-100">
    <CardSection />
      <ReviewCard 
    title="Something Blue"
    status="Showing"
    date="07/21/2020"
    comment="something Most interesting Being said"
    initials="SO"
    position="something gr8"
    name="Mr. Strong"
    jobTitle="Short manager"
      />
      <TerminalComp hostname="Heimdal" text="su -" />
    </div>
  );
};
export default Projects;
