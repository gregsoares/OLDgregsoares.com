import React from "react";
import { FeatSection } from "./FeatSection";

// import reportingImg from './assets/reporting.jpg';
// import syncingImg from './assets/syncing.jpg';
import AgencyImg from "./assets/AgencySS.png";
import GregSoaresSS from "./assets/gsSS.png";

export const FeaturedSection = () => {
  // TODO: Add new project: https://github.com/gregsoares/insure-page-challenge
  return (
    <div
      className="pt-6 border-t-0 border-l-0 border-r-0 border-white brand-darkBlue"
      data-testid="FeaturedSectionContainer"
    >
      <section className="">
        <FeatSection
          featTitle="FrontEndMentor.io Challenge: Develop the given design"
          featSubtitle=""
          featText={[
            "The template and challenge are from FrontEndMentor.io. The purpose is to develop a given design, this challenge was completed with only HTML and TailwindCSS. Deployed to Firebase.",
          ]}
          imgAlt="Template ScreenShot"
          imgCaption="Check Github for more info (Template ScreenShot)"
          variant="left"
          featTags={["TailwindCSS", "Front-End", "Responsive"]}
          featImg="https://raw.githubusercontent.com/gregsoares/insure-page-challenge/master/design/desktop-preview.jpg"
          bgColor="bg-feature-two"
          liveSite="https://gregsoares-283810.web.app/"
        />

        <FeatSection
          featTitle="GregSoares.com"
          featSubtitle="MERN - Full Stack JavaScript"
          featText={[
            "The Contact form uses REST API on the back-end to save messages to the database.The front-end uses third party APIs to implement Google OAuth. Sections and components are built with scalability and maintainability in mind. (low coupling, high cohesion)",
          ]}
          imgAlt="REST API routes"
          imgCaption="(REST API router file)"
          variant="right"
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={GregSoaresSS}
          bgColor="bg-feature-one"
        />

        <FeatSection
          featTitle="Reactify a Bootstrap Template"
          featSubtitle=""
          featText={[
            "As one of my first full stack projects I took this front-end template and made it into a full-stack MERN app. Developed routes for REST API, reusable components, easily scalable and customizable with proper documentation.",
          ]}
          imgAlt="Template ScreenShot"
          imgCaption="Template deployed to Heroku - free dyno, slow loadtime "
          variant="left"
          featTags={["Bootstrap", "Back-End", "Front-End", "Responsive"]}
          featImg={AgencyImg}
          bgColor="bg-feature-two"
          liveSite="https://agencytemplate.herokuapp.com/"
        />
      </section>
    </div>
  );
};
