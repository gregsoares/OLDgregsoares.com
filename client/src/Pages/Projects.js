import React from "react";

// Project Components import
import { PostSection } from "../Components/PostSection/PostSection";
import { MessagesPanel } from "../Components/MessagesPanel/MessagesPanel";

// TODO: Plato and Agency Repositories need SS and code review+Comments for display.

const Projects = () => {
  return (
    <div className="items-center justify-center bg-gray-100">
      <PostSection />
      <div className="max-w-md py-5 bg-teal-600">
        <MessagesPanel
          title="Reading All Messages"
          status="Last Update"
          date="07/21/2020"
          comment="something Most interesting Being said"
          initials="SO"
          position="something gr8"
          name="Mr. Strong"
          jobTitle="Short manager"
        />
      </div>
    </div>
  );
};
export default Projects;
