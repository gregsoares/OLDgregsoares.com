import React from 'react';

export const Topnav = () => {

  return (
    <nav className="sticky top-0 flex justify-between p-4 bg-gray-200 bg-opacity-75" data-testid="TopnavContainer">
      <div className="mr-12" data-testid="brandname" >
        <p className="py-0 font-serif text-2xl font-black ">GregSoares.com</p>
      </div>
      <div className="flex justify-end w-full mr-4 navbar-menu">
        <a className="topMenuBtn hover:shadow-sm hover:font-medium" href="/projects" >Projects</a>
        <a className="topMenuBtn hover:shadow-sm hover:font-medium" href="/" >Resume</a>
        <a className="topMenuBtn hover:shadow-sm hover:font-medium" href="/" >Github</a>
        <a className="topMenuBtn hover:shadow-sm hover:font-medium" href="/" >LinkedIn</a>
      </div>
    </nav>
  )
}