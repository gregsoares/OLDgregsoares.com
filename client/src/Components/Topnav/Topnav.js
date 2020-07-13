import React from 'react';

export const Topnav = props => {

  const activePage = props.activePage;
  const isActive = page => (
   (page === activePage) ? "topMenuBtn hover:shadow-md text-black hover:bg-gray-100" : "topMenuBtn hover:shadow-md text-gray-700 hover:bg-gray-100"
  )

  return (
    <nav className="sticky top-0 flex justify-between px-4 py-0 bg-gray-200 bg-opacity-75" data-testid="TopnavContainer">
      <div className="mr-12 py-0" data-testid="brandName" >
        <p className="py-0 font-serif text-2xl  ">GregSoares.com</p>
      </div>
      <div className="flex justify-end w-full mr-4 py-0 navbar-menu font-semibold">
        <a className={isActive("projects")} href="/projects" >Projects</a>
        <a className={isActive("resume")} href="/" >Resume</a>
        <a className={isActive("github")} href="/" >Github</a>
        <a className={isActive("linkedin")} href="/" >LinkedIn</a>
      </div>
    </nav>
  )
}