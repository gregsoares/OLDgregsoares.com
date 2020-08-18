import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// FIXME: Download resume and project links (to either github or preview)
// FIXME: Mobile Menu doesn't close when it's been clicked on (implement prev state )
export const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(null);
  const activePage = props.activePage;
  const isActive = (page) =>
    page === activePage
      ? "topMenuBtn text-black hover:shadow-lg hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border "
      : "topMenuBtn text-gray-200 hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border  hover:shadow-lg ";

  useEffect(
    (e) => {
      const handleClick = () => {
        isOpen && setIsOpen(!isOpen);
      };
      document.addEventListener("mousedown", handleClick, false);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    },
    [isOpen]
  );
  return (
    <nav
      className="sticky top-0 flex flex-wrap items-center justify-between py-0 shadow-md"
      style={{ backgroundColor: "#45718C" }}
      data-testid="TopnavContainer"
    >
      <div className="ml-4 my-2 py-0" data-testid="brandName">
        <p className="py-0 font-serif text-2xl ">GregSoares.com</p>
      </div>

      <div className="flex items-center mr-4 navbar-menu font-semibold">
        <a
          className={
            isActive("linkedin") +
            " ml-2 md:ml-8 lg:ml-16 transform duration-300 ease-out"
          }
          href="https://www.linkedin.com/in/greg-soares"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          className={isActive("github") + " ml-2 "}
          href="https://github.com/gregsoares"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="githubNavLink"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      <div
        className=" object-center relative mx-4"
        id="mobileMenu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className=" sm:hidden " id="menuItem">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed overflow-hidden mx-auto border-teal-500 rounded-lg text-center top-0 right-0 mt-14 py-3 px-4 origin-top transform duration-500 ease-out`}
          style={{ backgroundColor: "#45718C" }}
          id="mobileNavLinks"
        >
          <a
            className={isActive("home") + "p-2"}
            href="/"
            data-testid="homeNavLink"
          >
            Home
          </a>
          <a
            className={isActive("projects") + "p-2"}
            href="/projects"
            data-testid="projectsNavLink"
          >
            Projects
          </a>

          <a
            className={isActive("resume") + "p-2"}
            href="https://www.linkedin.com/in/greg-soares/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABkED18BwLp2ur2OWi7pIobAZZSlpJBTgp0,1593197804619)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BGRPVrhLgTa272qWWSqugbw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="resumeNavLink"
          >
            Resume
          </a>
        </div>
      </div>

      <div
        className="hidden sm:flex items-center mr-4 py-0 navbar-menu font-semibold"
        id="navLinks"
      >
        <a className={isActive("home") + ""} href="/" data-testid="homeNavLink">
          Home
        </a>
        <a
          className={isActive("projects") + ""}
          href="/projects"
          data-testid="projectsNavLink"
        >
          Projects
        </a>

        <a
          className={isActive("resume") + ""}
          href="https://www.linkedin.com/in/greg-soares/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABkED18BwLp2ur2OWi7pIobAZZSlpJBTgp0,1593197804619)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BGRPVrhLgTa272qWWSqugbw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view"
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
