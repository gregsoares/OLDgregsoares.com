import React from "react";
import { MernTemplate } from "./MernTemplate";
import { InsureChallenge } from "./InsureChallenge";
import { AgencyTemplate } from "./AgencyTemplate";

export const PostSection = () => {
  return (
    <div
      className="px-4 py-8 font-sans text-gray-500 "
      data-testid="PostSectionContainer"
    >
      <InsureChallenge />
      <div className="h-2 border-b"></div>
      <AgencyTemplate />
      <div className="h-2 border-b"></div>
      <MernTemplate />
    </div>
  );
};
