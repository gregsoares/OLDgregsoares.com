import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const activePage = useLocation().pathname;

  // FIXME: isActive not working
  const isActive = (page) =>
    page === activePage
      ? "topMenuBtn tracking-wider mx-1 font-semibold text-white hover:shadow-lg hover:bg-opacity-25 hover:text-white hover:bg-gray-100 rounded-md  "
      : "topMenuBtn tracking-wider mx-1 font-medium text-gray-100 hover:bg-opacity-25 hover:text-white hover:bg-gray-300 rounded-md hover:shadow-lg ";

  return (
    <nav
      className="sticky top-0 flex flex-wrap items-center py-2 bg-opacity-75 shadow-md bg-topnav"
      data-testid="TopnavContainer"
      onMouseLeave={() => isOpen && setIsOpen(false)}
    >
      <div className="py-0 my-2 ml-8 text-white" data-testid="brandName">
        <p className="py-0 text-xl font-medium tracking-wide lg:font-semibold md:text-2xl xl:text-3xl ">
          <a href="/">GregSoares.com</a>
        </p>
      </div>
      <div
        className="flex items-center mx-auto font-semibold navbar-menu"
        id="socialIconContainer"
      >
        <a
          className="text-gray-400 rounded-md topMenuBtn hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:shadow-lg"
          href="https://www.linkedin.com/in/greg-soares"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        <a
          className="text-gray-400 rounded-md topMenuBtn hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:shadow-lg"
          href="https://github.com/gregsoares"
          target="_blank"
          rel="noopener noreferrer external"
          data-testid="githubNavLink"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </div>{" "}
      {/* END SocialIcon Container */}
      <div
        className="flex-col p-1 text-gray-400 sm:hidden "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        id="menuItem"
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="relative object-center mx-4 " id="mobileMenu">
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } bg-mobilenav tracking-wider fixed mt-2 overflow-hidden mx-auto rounded-lg text-center top-0 right-0 mt-14 py-5 px-4 origin-top transform duration-500 ease-out`}
          id="mobileNavLinks"
        >
          <a
            className={isActive("/") + "py-3 text-md rounded-md"}
            href="/"
            data-testid="homeNavLink"
          >
            Home
          </a>
          <a
            className={isActive("/projects") + "py-3 text-md rounded-md"}
            href="/projects"
            data-testid="projectsNavLink"
          >
            Projects
          </a>

          <a
            className={isActive("/resume") + "py-3 text-md rounded-md"}
            href="/GregSoares-Resume.pdf"
            target="_blank"
            rel="noreferrer noopenner"
            data-testid="resumeNavLink"
          >
            Resume
          </a>
        </div>
      </div>
      <div
        className="items-center hidden py-0 mr-8 font-semibold sm:flex navbar-menu"
        id="navLinks"
      >
        <a className={isActive("/") + ""} href="/" data-testid="homeNavLink">
          Home
        </a>
        <a
          className={isActive("/projects") + ""}
          href="/projects"
          data-testid="projectsNavLink"
        >
          Projects
        </a>

        <a
          className={isActive("/resume") + ""}
          href="/GregSoares-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="resumeNavLink"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};
