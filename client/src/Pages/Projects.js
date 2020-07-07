import React from 'react'

// Project Components import
import { SampleReviewCard } from "../Components/Projects/Projects";
import { TerminalComp } from "../Components/TerminalComp/TerminalComp";

 const Projects = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <SampleReviewCard />
      <TerminalComp />
    </div>
  )
}
export default Projects;