import React from "react";

// Project Components import
import { TerminalComp } from "../Components/TerminalComp/TerminalComp";
import { ReviewCard } from "../Components/ReviewCard/ReviewCard";

const Projects = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <ReviewCard />
      <TerminalComp />
    </div>
  );
};
export default Projects;
