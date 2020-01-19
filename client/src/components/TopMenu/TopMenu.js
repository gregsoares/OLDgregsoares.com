import React from "react";

export const TopMenu = props => {

  return (
    <React.Fragment>

      {/* <!-- / Nav Star / -->*/}
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">DevFolio</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#service">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- / Nav End / -->*/}

      {/* <!-- / Intro Skew Star / -->*/}
      {/* <div id="home" className="intro route bg-image" >
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container"> */}
              {/* <!--<p className="display-6 color-d">Hello, world!</p>--> */}
              {/* <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
              <p className="intro-subtitle"><span className="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong className="text-slider"></strong></p> */}
              {/* <!-- <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
            {/* </div>
          </div>
        </div>
      </div> */}
      {/* <!-- / Intro Skew End / -->*/}
{/* 
      <a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      <div id="preloader"></div> */}

      {/* <!-- JavaScript Libraries --> */}
      {/* <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/jquery/jquery-migrate.min.js"></script>
      <script src="lib/popper/popper.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/counterup/jquery.waypoints.min.js"></script>
      <script src="lib/counterup/jquery.counterup.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="lib/lightbox/js/lightbox.min.js"></script>
      <script src="lib/typed/typed.min.js"></script>
      {/* <!-- Contact Form JavaScript File --> */}
      {/* <script src="contactform/contactform.js"></script> */}

      {/* <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>

    </React.Fragment>
  )
}