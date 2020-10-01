import React from "react";
import { MernTemplate } from "./MernTemplate";
import { InsureChallenge } from "./InsureChallenge";
import { AgencyTemplate } from "./AgencyTemplate";
import { WixLandingPage } from "./WixLandingPage";

export const ProjectSection = () => {
  return (
    <div
      className="px-4 py-8 font-sans text-gray-500 "
      data-testid="PostSectionContainer"
    >
      <WixLandingPage />
      <div className="w-4/5 h-2 mx-auto border-b"></div>
      <InsureChallenge />
      <div className="w-4/5 h-2 mx-auto border-b"></div>
      <AgencyTemplate />
      <div className="w-4/5 h-2 mx-auto border-b"></div>
      <MernTemplate />
    </div>
  );
};
