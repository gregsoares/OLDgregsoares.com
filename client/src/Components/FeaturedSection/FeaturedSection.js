import React from "react";
import { FeatSection } from "./FeatSection";

// import reportingImg from './assets/reporting.jpg';
// import syncingImg from './assets/syncing.jpg';
import AgencyImg from "./assets/AgencySS.png";

// TODO: Make a variant option for  Left/Right style posts
export const FeaturedSection = () => {
  return (
    <div className="" data-testid="FeaturedSectionContainer">
      <section className="">
        <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-gray-800">
          Projects
        </h2>
        <FeatSection
          featTitle="GregSoares.com ➡ Full MERN Stack"
          featSubtitle="MongoDB, ExpressJs, ReactJs, NodeJs"
          featText={[
            "REST API on the Back-End sends messages to the database server.The Front-End uses third party APIs to implement the login options available.",
          ]}
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={AgencyImg}
          bgColor="bg-indigo-400"
        />
        <FeatSection
          featTitle="Bootstrap Template ➡ Full MERN Stack Template"
          featSubtitle=""
          featText={[
            "Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.",
          ]}
          featTags={["Bootstrap", "Tech Skill", "Pro Debugger"]}
          featImg={AgencyImg}
        />
      </section>
    </div>
  );
};
