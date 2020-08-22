import React from "react";

export const Footer = () => {
  return (
    <div className="py-6 bg-topnav" data-testid="FooterContainer">
      <p className="text-xs text-center text-gray-200" id="FooterText">
        <span id="footerSymbol"> &copy;2020 </span>
        GregSoares.com
        <span id="footerRightsReserved">. All rights reserved.</span>
      </p>
    </div>
  );
};
