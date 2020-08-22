import React from "react";
import { FeatSection } from "./FeatSection";

// import reportingImg from './assets/reporting.jpg';
// import syncingImg from './assets/syncing.jpg';
import AgencyImg from "./assets/AgencySS.png";

export const FeaturedSection = () => {
  return (
    <div
      className="pt-6 border-t-0 border-l-0 border-r-0 border-white brand-darkBlue"
      data-testid="FeaturedSectionContainer"
    >
      <section className="">
        <h2 className="text-4xl font-bold text-center text-gray-200">
          Projects
        </h2>
        <FeatSection
          featTitle="GregSoares.com ➡ Full MERN Stack"
          featSubtitle="MongoDB, ExpressJs, ReactJs, NodeJs"
          featText={[
            "REST API on the back-end sends messages to the database server.The front-end uses third party APIs to implement Google OAuth.",
          ]}
          variant="left"
          featTags={["TailwindCSS", "TDD", "PassportJs", "Heroku Deployment"]}
          featImg={AgencyImg}
          bgColor="bg-feature-one"
        />
        <FeatSection
          featTitle="Bootstrap Template ➡ Full MERN Stack Template"
          featSubtitle="The job of a full-ftack web developer"
          featText={[
            "Given a front-end template and made it into a full-stack JavaScript web application. REST API ready, reusable components, easily scalable and customizable with proper documentation.",
          ]}
          variant="right"
          featTags={["Bootstrap", "Back-End", "Front-End", "Responsive"]}
          featImg={AgencyImg}
          bgColor="bg-feature-two"
        />
      </section>
    </div>
  );
};
