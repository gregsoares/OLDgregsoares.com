import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const TopNav = () => {
  const [currentPage, setCurrentPage] = useState("Index");

  return (
    <header id="header">
      <div className="container-fluid">

        <div id="logo" className="pull-left">
          <h1><Link to="#intro" className="scrollto" onClick={() => setCurrentPage("Index")} >GregSoares</Link></h1>

          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <Link to="#intro"><img src="img/logo.png" alt="" title="" onClick={() => setCurrentPage()}    /></Link>--> */}
        </div>

{/* FIXME: Link to #section not working, scrollto ? */}
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className={currentPage === "Index" ? "menu-active" : ""}><Link to="#intro" onClick={() => setCurrentPage("Index")} >Home</Link></li>
            <li className={currentPage === "About" ? "menu-active" : ""}><Link to="#about" onClick={() => setCurrentPage("About")} >About Us</Link></li>
            <li className={currentPage === "Services" ? "menu-active" : ""}><Link to="#services" onClick={() => setCurrentPage("Services")} >Services</Link></li>
            <li className={currentPage === "Portfolio" ? "menu-active" : ""}><Link to="#portfolio" onClick={() => setCurrentPage("Portfolio")} >Portfolio</Link></li>
            <li className={currentPage === "Team" ? "menu-active" : ""}><Link to="#team" onClick={() => setCurrentPage("Team")} >Team</Link></li>
            {/* <li className="menu-has-children"><Link to="" onClick={() => setCurrentPage()} >Drop Down</Link>
              <ul>
                <li><Link to="#" onClick={() => setCurrentPage()} >Drop Down 1</Link></li>
                <li><Link to="#" onClick={() => setCurrentPage()} >Drop Down 3</Link></li>
                <li><Link to="#" onClick={() => setCurrentPage()} >Drop Down 4</Link></li>
                <li><Link to="#" onClick={() => setCurrentPage()} >Drop Down 5</Link></li>
              </ul>
            </li> */}
            <li className={currentPage === "Contact" ? "menu-active" : ""}><Link to="#contact" onClick={() => setCurrentPage("Contact")} >Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
