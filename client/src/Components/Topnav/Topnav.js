import React, { useState, useEffect } from 'react';

// Icons
// import  faChevronCircleDown  from "./chevron-circle-down-solid.svg";

export const Topnav = () => {
  // TODO: Add background + opacity for better reading when scrolling
  // TODO: Add Context to Topnav

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(() => {
    if (window.innerWidth < 768) return true;
    return false;
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  const toggleMobileMenu = () => {
    // setMobileMenuToggle(revState => !prevState);
    // console.debug(`Mobile Menu Toggled ${mobileMenuToggle}`);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <nav className="sticky top-0 flex flex-wrap justify-between p-4 bg-gray-200 bg-opacity-75" data-testid="TopnavContainer">
      <span data-testid="brandname" className="">
        <p className="py-0 font-serif text-2xl font-black ">GregSoares.com</p>
      </span>
      <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <a className="text-xl font-semibold text-indigo-500" href="/" >{windowWidth}</a>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMobileMenu()} className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">

            </path>
          </svg>
        </button>
      </div>
      <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 md:ml-12 hover:text-blue-700" href="/projects" >Projects</a>
        <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="/" >About Me</a>
        <a className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="/" >Contact</a>
      </div>
      <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="/" >Resume</a>
        <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-700" href="/" >Github</a>
        <a className="block mt-4 text-blue-900 lg:inline-block md:mr-12 lg:mt-0 hover:text-blue-700" href="/" >LinkedIn</a>
      </div>
    </nav>
    // <nav data-testid="Topnav" className="flex p-6 bg-blue-500">
    //   <span data-testid="brandname" className="">
    //     <p className="py-0 font-serif text-2xl font-black ">GregSoares.com</p>
    //   </span>
    //   <div data-testid="NavLinks" className="mx-auto display-none">
    //     <a href="/" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Home</a>
    //     <a href="/projects" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Projects</a>
    //     <a href="/github" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Github</a>
    //     <a href="/about" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">About Me</a>
    //   </div>
    //     <div data-testid="CollapseBtn" className="mx-auto ">
    //       Menu <span className="" data-testid="MenuChevron"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-down" className="svg-inline--fa fa-chevron-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"></path></svg>
    //       </span>
    //       {/* TODO: Add the above menu items */}
    //     </div>
    // </nav>
  )
}