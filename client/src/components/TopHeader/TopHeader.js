import React from 'react';

export const TopHeader = props => {

  return (
    <React.Fragment>
            <header>
        {/* <!-- Navbar */}
        {/* ================================================== --> */}
    <div className="cbp-af-header">
          <div className=" cbp-af-inner">
            <div className="container">
              <div className="row">

                <div className="span4">
                  {/* <!-- logo --> */}
              <div className="logo">
                    <h1><a href="index.html">GregSoares.com</a></h1>
                    {/* <!-- <img src="assets/img/logo.png" alt="" /> --> */}
              </div>
                  {/* <!-- end logo --> */}
            </div>

                <div className="span8">
                  {/* <!-- top menu --> */}
              <div className="navbar">
                    <div className="navbar-inner">
                      <nav>
                        <ul className="nav topnav">
                          <li className="dropdown active">
                            <a href="index.html">Home</a>
                          </li>
                          <li className="dropdown">
                            <a href="/">Projects</a>
                            <ul className="dropdown-menu">
                              <li><a href="scaffolding.html">Scaffolding</a></li>
                              <li><a href="base-css.html">Base CSS</a></li>
                              <li><a href="components.html">Components</a></li>
                              <li><a href="icons.html">Icons</a></li>
                              <li><a href="list.html">Styled lists</a></li>
                              <li className="dropdown"><a href="/">3rd level</a>
                                <ul className="dropdown-menu sub-menu">
                                  <li><a href="/">Example menu</a></li>
                                  <li><a href="/">Example menu</a></li>
                                  <li><a href="/">Example menu</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="/">Pages</a>
                            <ul className="dropdown-menu">
                              <li><a href="about.html">About us</a></li>
                              <li><a href="pricingtable.html">Pricing table</a></li>
                              <li><a href="fullwidth.html">Fullwidth</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="/">Portfolio</a>
                            <ul className="dropdown-menu">
                              <li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
                              <li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
                              <li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
                              <li><a href="portfolio-detail.html">Portfolio detail</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="/">Blog</a>
                            <ul className="dropdown-menu">
                              <li><a href="blog_left_sidebar.html">Blog left sidebar</a></li>
                              <li><a href="blog_right_sidebar.html">Blog right sidebar</a></li>
                              <li><a href="post_left_sidebar.html">Post left sidebar</a></li>
                              <li><a href="post_right_sidebar.html">Post right sidebar</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* <!-- end menu --> */}
            </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}