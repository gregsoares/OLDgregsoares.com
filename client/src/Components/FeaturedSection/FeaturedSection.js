import React from "react";
import { FeatSection } from "./FeatSection";

// import reportingImg from './assets/reporting.jpg';
// import syncingImg from './assets/syncing.jpg';
import AgencyImg from "./assets/AgencySS.png";

// TODO: Make a variant option for  Left/Right style posts (iff > sm: )
// TODO: add proper content
export const FeaturedSection = () => {
  return (
    <div className="pt-6 bg-indigo-400" data-testid="FeaturedSectionContainer">
      <section className="">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Projects
        </h2>
        <FeatSection
          featTitle="GregSoares.com ➡ Full MERN Stack"
          featSubtitle="MongoDB, ExpressJs, ReactJs, NodeJs"
          featText={[
            "REST API on the Back-End sends messages to the database server.The Front-End uses third party APIs to implement Google OAuth.",
          ]}
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={AgencyImg}
          bgColor="bg-indigo-400"
        />
        <FeatSection
          featTitle="Bootstrap Template ➡ Full MERN Stack Template"
          featSubtitle="The job of a full-ftack web developer"
          featText={[
            "Given a front-end template and made it into a full-stack JavaScript web application. REST API ready, reusable components, easily scalable and customizable with proper documentation.",
          ]}
          featTags={["Bootstrap", "Back-End", "Front-End", "Responsive"]}
          featImg={AgencyImg}
        />
      </section>
    </div>
  );
};
