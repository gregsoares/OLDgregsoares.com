import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// TODO: Add a mobile nav
// FIXME: Download resume and project links (to either gethub or preview)
export const Topnav = (props) => {
  const activePage = props.activePage;
  const isActive = (page) =>
    page === activePage
      ? "topMenuBtn text-black hover:shadow-lg hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border "
      : "topMenuBtn text-gray-200 hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border  hover:shadow-lg ";

  return (
    <nav
      className="sticky top-0 flex flex-wrap justify-between py-0 shadow-md"
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
        className=" flex items-center mr-4 py-0 navbar-menu font-semibold"
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
