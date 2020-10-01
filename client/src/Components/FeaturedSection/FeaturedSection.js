import React from "react";
import { FeatSection } from "./FeatSection";

// import reportingImg from './assets/reporting.jpg';
// import syncingImg from './assets/syncing.jpg';
import AgencyImg from "./assets/AgencySS.png";
import GregSoaresSS from "./assets/gsSS.png";

export const FeaturedSection = () => {
  return (
    <div
      className="pt-6 border-t-0 border-l-0 border-r-0 border-white brand-darkBlue"
      data-testid="FeaturedSectionContainer"
    >
      <section className="">
        <FeatSection
          featTitle="Freelancing Service - Wix Landing Page"
          featSubtitle=""
          featText={[
            "The beginning of my freelancing business officially with the launch of this landing page. Building GregSoares.com from the ground up, allows me to provide quality web services such as 3rd party APIs & App integration, Email, DNS & Domain redirection, SSL Certificate Instalation, and much more. Please, heck out the Wix Landing Page. ",
          ]}
          imgAlt="Design ScreenShot"
          imgCaption="Check Github for more info (Template ScreenShot)"
          variant="left"
          featTags={["Wix", "SEO", "Keyword Analysis", "Content Optimization"]}
          featImg="https://i.ibb.co/T4VSb21/Screenshot-from-2020-09-30-22-47-48.png"
          imgLink="https://i.ibb.co/dDWbdSy/Full-Wix-LP.png"
          bgColor="bg-feature-two"
          liveSite="https://gregasoares.wixsite.com/portfolio"
        />
        <FeatSection
          featTitle="FrontEndMentor.io Challenge: Develop the given design"
          featSubtitle=""
          featText={[
            "The template and challenge are from FrontEndMentor.io. The purpose is to develop a given design, this challenge was completed with only HTML and TailwindCSS. Deployed to Firebase.",
          ]}
          imgAlt="Design ScreenShot"
          imgCaption="Check Github for more info (Template ScreenShot)"
          variant="right"
          featTags={["TailwindCSS", "Front-End", "Responsive"]}
          featImg="https://raw.githubusercontent.com/gregsoares/insure-page-challenge/master/design/desktop-preview.jpg"
          imgLink="https://ibb.co/qDHFSnk"
          bgColor="bg-feature-two"
          liveSite="https://insurechallenge.firebaseapp.com/"
        />

        <FeatSection
          featTitle="Agency Bootstrap Template"
          featSubtitle=""
          // Rewrite to third person
          featText={[
            "Provided by BootstrapMade.com this static front-end template is now a full-stack MERN application. Developed routes for REST API, reusable components, easily scalable and customizable with proper documentation.",
          ]}
          imgAlt="Template ScreenShot"
          imgCaption="Template deployed to Heroku - free dyno, slow loadtime "
          variant="left"
          featTags={["Bootstrap", "Back-End", "Front-End", "Responsive"]}
          imgLink="https://ibb.co/rxyQGdf"
          featImg={AgencyImg}
          bgColor="bg-feature-two"
          liveSite="https://agencytemplate.herokuapp.com/"
        />

        <FeatSection
          featTitle="GregSoares.com"
          featSubtitle="MERN - Full Stack JavaScript"
          featText={[
            "The Contact form uses custom REST API on the back-end to save messages to the database.The front-end uses third party APIs to implement Google OAuth. Sections and components are built with scalability and maintainability in mind. (low coupling, high cohesion)",
          ]}
          imgAlt="REST API routes"
          imgCaption="(REST API router file)"
          variant="right"
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={GregSoaresSS}
          bgColor="bg-feature-one"
        />
      </section>
    </div>
  );
};
