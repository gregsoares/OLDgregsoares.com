import React from "react";
import { MernTemplate } from "./MernTemplate";
import { InsureChallenge } from "./InsureChallenge";

export const PostSection = () => {
  return (
    <div
      className="px-4 py-8 font-sans text-gray-500 "
      data-testid="PostSectionContainer"
    >
      <InsureChallenge />
      <MernTemplate />
    </div>
  );
};
