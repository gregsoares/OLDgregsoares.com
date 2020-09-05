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
          featTitle="Front-End Mentor challenge  ➡ Stack Template"
          featSubtitle="The job of a full-stack web developer"
          featText={[
            "The template and challenge are from FrontEndMentor.io. The purpose is to develop a given design, this challenge was completed with only HTML and TailwindCSS.",
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
          featTitle="GregSoares.com ➡ Full MERN Stack"
          featSubtitle="MongoDB, ExpressJs, ReactJs, NodeJs"
          featText={[
            "This website's code is all on Github, it features:REST API on the back-end sends messages to the database server.The front-end uses third party APIs to implement Google OAuth.",
          ]}
          imgAlt="clean code showing REST API routes"
          imgCaption="(REST API router file)"
          variant="right"
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={GregSoaresSS}
          bgColor="bg-feature-one"
        />

        <FeatSection
          featTitle="Bootstrap Template ➡ Full MERN Stack Template"
          featSubtitle="The job of a full-stack web developer"
          featText={[
            "Given a front-end template and made it into a full-stack JavaScript web application. REST API ready, reusable components, easily scalable and customizable with proper documentation.",
          ]}
          imgAlt="Template ScreenShot"
          imgCaption="(Template ScreenShot)"
          variant="left"
          featTags={["Bootstrap", "Back-End", "Front-End", "Responsive"]}
          featImg={AgencyImg}
          bgColor="bg-feature-two"
          liveSite="https://gregsoares-283810.web.app/"
        />
      </section>
    </div>
  );
};
