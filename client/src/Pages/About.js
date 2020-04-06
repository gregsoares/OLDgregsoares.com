import React from 'react';

export const About = props => {

  return (
    <React.Fragment>

      {/* Theme Name: Plato
    Theme URL: https://bootstrapmade.com/plato-responsive-bootstrap-website-template/
    Author: BootstrapMade.com
    Author URL: https://bootstrapmade.com */}
      {/* ======================================================= --> */}
      {/* {Headers} */}

      <body>
        <header>
          {/* <!-- Navbar */}
          {/* ================================================== --> */}
          <div className=" cbp-af-header">
            <div className=" cbp-af-inner">
              <div className="container">
                <div className="row">

                  <div className="span4">
                    {/* <!-- logo --> */}
                    <a className="logo" href="index.html">
                      <h1>About</h1>
                      {/* <!-- <img src="assets/img/logo.png" alt="" /> --> */}
                    </a>
                    {/* <!-- end logo --> */}
                  </div>

                  <div className="span8">
                    {/* <!-- top menu --> */}
                    <div className="navbar">
                      <div className="navbar-inner">
                        <nav>
                          <ul className="nav topnav">
                            <li className="dropdown">
                              <a href="index.html">Home</a>
                            </li>
                            <li className="dropdown">
                              <a href="/">Features</a>
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
                            <li className="dropdown active">
                              <a href="/">Pages</a>
                              <ul className="dropdown-menu">
                                <li><a href="about.html">About us</a></li>
                                <li><a href="pricingtable.html">Pricing table</a></li>
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
        {/* <!-- Subhead */}
        {/* ================================================== --> */}
        <section id="subintro">

          <div className="container">
            <div className="row">
              <div className="span4">
                <h3>About <strong>our company</strong></h3>
              </div>
              <div className="span8">
                <ul className="breadcrumb notop">
                  <li><a href="/">Home</a><span className="divider">/</span></li>
                  <li className="active">About</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        <section id="maincontent">
          <div className="container">
            <div className="row">
              <div className="span4">
                <div className="well">
                  <div className="centered e_bounce">
                    <i className="icon-bg-light icon-circled icon-group icon-3x active"></i>
                    <h4><strong>Best</strong> team</h4>
                    <p>
                      Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper.
              </p>
                  </div>
                </div>
              </div>
              <div className="span4">
                <div className="well">
                  <div className="centered e_bounce">
                    <i className="icon-bg-light icon-circled icon-rocket icon-3x active"></i>
                    <h4><strong>High</strong> dedication</h4>
                    <p>
                      Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper.
              </p>
                  </div>
                </div>
              </div>
              <div className="span4">
                <div className="well">
                  <div className="centered e_bounce">
                    <i className="icon-bg-light icon-circled icon-heart icon-3x active"></i>
                    <h4><strong>Work</strong> with heart</h4>
                    <p>
                      Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper.
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="span12">
                <div className="solid_line">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="span12">
                <h4>Our services</h4>
                {/* <!-- start: Accordion --> */}
                <div className="accordion" id="accordion2">
                  <div className="accordion-group">
                    <div className="accordion-heading">
                      <a className="accordion-toggle active" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                        <i className="icon-minus"></i> Database management</a>
                    </div>
                    <div id="collapseOne" className="accordion-body collapse in">
                      <div className="accordion-inner">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                  </div>
                  <div className="accordion-group">
                    <div className="accordion-heading">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                        <i className="icon-plus"></i> UI development</a>
                    </div>
                    <div id="collapseTwo" className="accordion-body collapse">
                      <div className="accordion-inner">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                  </div>
                  <div className="accordion-group">
                    <div className="accordion-heading">
                      <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
                        <i className="icon-plus"></i> Social media</a>
                    </div>
                    <div id="collapseThree" className="accordion-body collapse">
                      <div className="accordion-inner">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                    </div>
                  </div>
                </div>
                {/* <!--end: Accordion --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer */}
        {/* ================================================== --> */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="span3">
                <div className="widget">
                  {/* <!-- logo --> */}
                  <div className="footerlogo">
                    <h6><a href="index.html">Plato</a></h6>
                    {/* <!-- <img src="assets/img/logo.png" alt="" /> --> */}
                  </div>
                  {/* <!-- end logo --> */}
                  <address>
                    <strong>Plato business company, Inc.</strong><br />
                    4455 Great building Ave, Suite A10<br />
                    San Francisco, CA 94107<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890 </address>
                </div>
              </div>
              <div className="span3">
                <div className="widget">
                  <h5>Browse pages</h5>
                  <ul className="list list-ok">
                    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                    <li><a href="/">Tamquam ponderum at eum, nibh dicta offendit mei</a></li>
                    <li><a href="/">Vix no vidisse dolores intellegam</a></li>
                    <li><a href="/">Est virtute feugiat accommodare eu</a></li>
                  </ul>
                </div>
              </div>
              <div className="span3">
                <div className="widget">
                  <h5>Flickr photostream</h5>
                  <div className="flickr_badge">
                    <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="span3">
                <div className="widget">
                  <h5>Keep updated</h5>
                  <p>
                    Enter your email to subcribe newsletter
            </p>
                  <form>
                    <div className="input-append">
                      <input className="span2" id="appendedInputButton" type="text" />
                      <button className="btn btn-color" type="submit">Subscribe</button>
                    </div>
                  </form>
                  <ul className="social-network">
                    <li><a href="/"><i className="icon-bg-light icon-facebook icon-circled icon-1x"></i></a></li>
                    <li><a href="/" title="Twitter"><i className="icon-bg-light icon-twitter icon-circled icon-1x"></i></a></li>
                    <li><a href="/" title="Linkedin"><i className="icon-bg-light icon-linkedin icon-circled icon-1x"></i></a></li>
                    <li><a href="/" title="Pinterest"><i className="icon-bg-light icon-pinterest icon-circled icon-1x"></i></a></li>
                    <li><a href="/" title="Google plus"><i className="icon-bg-light icon-google-plus icon-circled icon-1x"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="subfooter">
            <div className="container">
              <div className="row">
                <div className="span6">
                  <p>
                    &copy; Plato - All right reserved
            </p>
                </div>
                <div className="span6">
                  <div className="pull-right">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/modernizr.js"></script>
        <script src="assets/js/jquery.easing.1.3.js"></script>
        <script src="assets/js/google-code-prettify/prettify.js"></script>
        <script src="assets/js/bootstrap.js"></script>
        <script src="assets/js/jquery.prettyPhoto.js"></script>
        <script src="assets/js/portfolio/jquery.quicksand.js"></script>
        <script src="assets/js/portfolio/setting.js"></script>
        <script src="assets/js/hover/jquery-hover-effect.js"></script>
        <script src="assets/js/jquery.flexslider.js"></script>
        <script src="assets/js/classie.js"></script>
        <script src="assets/js/cbpAnimatedHeader.min.js"></script>
        <script src="assets/js/jquery.refineslide.js"></script>
        <script src="assets/js/animate.js"></script>
        <script src="assets/js/jquery.ui.totop.js"></script>

        {/* <!-- Template Custom Javascript File --> */}
        <script src="assets/js/custom.js"></script>

      </body>

      {/* </html> */}

    </React.Fragment>
  );
}