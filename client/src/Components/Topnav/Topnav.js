import React from 'react';

export const Topnav = props => {

  const activePage = props.activePage;
  const isActive = page => (
   (page === activePage) ? "topMenuBtn hover:shadow-md text-black hover:bg-gray-100" : "topMenuBtn hover:shadow-md text-gray-800 hover:bg-gray-100"
  )

  return (
    <nav className="sticky top-0 flex justify-between px-4 py-0 bg-blue-500 bg-opacity-50 shadow-inner" data-testid="TopnavContainer">
      <div className="mr-12 py-0" data-testid="brandName" >
        <p className="py-0 font-serif text-2xl  ">GregSoares.com</p>
      </div>
      <div className="flex justify-end w-full mr-4 py-0 navbar-menu font-semibold">
        <a className={isActive("home") + ''} href="/" >Projects</a>
        <a className={isActive("projects") + ''} href="/projects" >Projects</a>
        <a className={isActive("resume") + ''} href="https://www.linkedin.com/in/greg-soares/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABkED18BwLp2ur2OWi7pIobAZZSlpJBTgp0,1593197804619)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BGRPVrhLgTa272qWWSqugbw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view" >Resume</a>
        <a className={isActive("github") + ''} href="#github" >Github</a>
        <a className={isActive("linkedin") + ''} href="http://www.linkedin.com/in/greg-soares" target="_blank" >LinkedIn</a>
      </div>
    </nav>
  )
}