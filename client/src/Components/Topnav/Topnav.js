import React, { useContext } from "react";
import { TopNavContext } from "../../assets/store/TopNavContext";

export const Topnav = () => {
  const context = useContext(TopNavContext);
  context.setWidth(window.innerWidth);
  console.debug(`Result from context: 
  width: ${context.width}
  activePage: ${context.activePage}
  `);
  const isActive = (page) =>
    page === context.activePage
      ? "topMenuBtn text-black hover:shadow-lg hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border "
      : "topMenuBtn text-gray-200 hover:bg-opacity-25 hover:text-white hover:bg-gray-300 hover:border-white rounded-md hover:border  hover:shadow-lg";

  return (
    <nav
      className="sticky top-0 flex justify-between py-0 shadow-md"
      style={{ backgroundColor: "#45718C" }}
      data-testid="TopnavContainer"
    >
      <div className="mr-12 py-0" data-testid="brandName">
        <p className="py-0 font-serif text-2xl ">GregSoares.com</p>
      </div>
      <div className="mr-12 py-0" data-testid="brandName">
        <p className="py-0 font-serif text-2xl ">{() => context.width}</p>
      </div>

      <div className="flex flex-wrap justify-end w-full mr-4 py-0 navbar-menu font-semibold">
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

        <a
          className={isActive("github") + ""}
          href="https://github.com/gregsoares"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="githubNavLink"
        >
          Github
        </a>

        <a
          className={isActive("linkedin") + ""}
          href="http://www.linkedin.com/in/greg-soares"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};
