import React, { useContext } from 'react'

// Icons
import  faChevronCircleDown  from "./chevron-circle-down-solid.svg";

export const Topnav = () => {
  // TODO: Add Context to Topnav

  return (
    <nav data-testid="Topnav" className="flex p-6 bg-blue-500">
      <span data-testid="brandname" className="">
        <p className="py-0 font-serif text-2xl font-black ">GregSoares.com</p>
      </span>
      <div data-testid="NavLinks" className="mx-auto display-none">
        <a href="/" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Home</a>
        <a href="/projects" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Projects</a>
        <a href="/github" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">Github</a>
        <a href="/about" className="mx-3 text-lg font-medium border-black hover:border-white border-gray hover:text-white">About Me</a>
      </div>
        <div data-testid="CollapseBtn" className="mx-auto ">
          Menu <span className="" data-testid="MenuChevron"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-down" class="svg-inline--fa fa-chevron-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"></path></svg>
          </span>
          {/* TODO: Add the above menu items */}
        </div>
    </nav>
  )
}
