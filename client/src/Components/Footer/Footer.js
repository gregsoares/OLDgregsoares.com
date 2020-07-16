import React from 'react'

export const Footer = () => {
  return (
    <div className="mt-6 mb-2" data-testid="FooterContainer">
      <p className="text-center text-gray-700 text-xs" id="ooterText">
        <span id="footerSymbol"> &copy;2020 </span>
        GregSoares.com 
        <span id="footerRightsReserved">. All rights reserved.</span>
  </p>
    </div>
  )
}
