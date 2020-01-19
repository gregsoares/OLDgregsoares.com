import React from "react";

export const Plato = props => {

  return (
    <React.Fragment>
      <header>
        {/* Fixme: fix links for icons+images+CSS on HTML file */}
        {/* <!-- Navbar */}
        {/* ================================================== --> */}
        <div className=" cbp-af-header">
          <div className=" cbp-af-inner">
            <div className="container">
              <div className="row">
                <div className="span4">
                  {/* <!-- logo --> */}
                  <a className="logo" href="index.html">
                    <h1>Plato</h1>
                    {/* <!-- <img src="./assets/img/logo.png" alt="" /> --> */}
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
                          <li className="dropdown active">
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
                          <li className="dropdown">
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
      ================================================== -->
  <section id="subintro">

        <div className="container">
          <div className="row">
            <div className="span4">
              <h3>Template <strong>Components</strong></h3>
            </div>
            <div className="span8">
              <ul className="breadcrumb notop">
                <li><a href="/">Home</a><span className="divider">/</span></li>
                <li className="active">Components</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section id="maincontent">
        <div className="container">
          <div className="row">
            <div className="span12">

              <div className="row">
                <div className="span6">
                  <h4>Tabs</h4>
                  <div className="tabbable">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#one" data-toggle="tab"><i className="icon-briefcase"></i> One</a></li>
                      <li><a href="#two" data-toggle="tab">Two</a></li>
                      <li><a href="#three" data-toggle="tab">Three</a></li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="one">
                        <p>
                          <strong>Augue iriure</strong> dolorum per ex, ne iisque ornatus veritus duo. Ex nobis integre lucilius sit, pri ea falli ludus appareat. Eum quodsi fuisset id, nostro patrioque qui id. Nominati eloquentiam in mea.
                    </p>
                        <p>
                          No eum sanctus vituperata reformidans, dicant abhorreant ut pro. Duo id enim iisque praesent, amet intellegat per et, solet referrentur eum et.
                    </p>
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                      </div>
                      <div className="tab-pane" id="two">
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                      </div>
                      <div className="tab-pane" id="three">
                        <p>
                          Cu cum commodo regione definiebas. Cum ea eros laboramus, audire deseruisse his at, munere aeterno ut quo. Et ius doming causae philosophia, vitae bonorum intellegat usu cu.
                    </p>
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="span6">
                  <h4>Accordion</h4>
                  {/* <!-- start: Accordion --> */}
                  <div className="accordion" id="accordion2">
                    <div className="accordion-group">
                      <div className="accordion-heading">
                        <a className="accordion-toggle active" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                          <i className="icon-caret-down"></i> Collapsible Group Item #1 </a>
                      </div>
                      <div id="collapseOne" className="accordion-body collapse in">
                        <div className="accordion-inner">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                      </div>
                    </div>
                    <div className="accordion-group">
                      <div className="accordion-heading">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                          <i className="icon-caret-right"></i> Collapsible Group Item #2 </a>
                      </div>
                      <div id="collapseTwo" className="accordion-body collapse">
                        <div className="accordion-inner">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                      </div>
                    </div>
                    <div className="accordion-group">
                      <div className="accordion-heading">
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
                          <i className="icon-caret-right"></i> Collapsible Group Item #3 </a>
                      </div>
                      <div id="collapseThree" className="accordion-body collapse">
                        <div className="accordion-inner">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--end: Accordion --> */}

                </div>
              </div>

              {/* <!-- line divider --> */}
              <div className="row">
                <div className="span12">
                  <div className="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div className="row">
                <div className="span6">
                  <h4>Alerts</h4>
                  <div className="alert">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Warning!</strong> Best check yo self, you're not looking too good.
              </div>
                  <div className="alert alert-error">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </div>
                  <div className="alert alert-success">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> Change a few things up and try submitting again.
              </div>
                  <div className="alert alert-info">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Heads up!</strong> Change a few things up and try submitting again.
              </div>
                </div>
                <div className="span6">
                  <h4>Progress</h4>
                  <div className="progress progress-primary">
                    <div className="bar" ></div>
                  </div>
                  <div className="progress progress-striped">
                    <div className="bar" ></div>
                  </div>
                  <div className="progress progress-striped active">
                    <div className="bar" ></div>
                  </div>
                  <div className="progress progress-success">
                    <div className="bar" ></div>
                  </div>

                  <div className="progress progress-info">
                    <div className="bar" ></div>
                  </div>
                  <div className="progress progress-warning">
                    <div className="bar" ></div>
                  </div>
                  <div className="progress progress-danger">
                    <div className="bar" ></div>
                  </div>

                </div>
              </div>

              {/* <!-- line divider --> */}
              <div className="row">
                <div className="span12">
                  <div className="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div className="row">
                <div className="span12">
                  <h4 className="heading"><strong>Button</strong> types<span></span></h4>

                  <a href="/" className="btn">btn default</a>
                  <a href="/" className="btn btn-color">btn color</a>
                  <a href="/" className="btn btn-primary">btn-primary</a>
                  <a href="/" className="btn btn-warning">btn-warning</a>
                  <a href="/" className="btn btn-danger">btn-danger</a>
                  <a href="/" className="btn btn-info">btn-info</a>
                  <a href="/" className="btn btn-success">btn-success</a>
                  <a href="/" className="btn btn-inverse">btn-inverse</a>
                </div>
              </div>

              {/* <!-- line divider --> */}
              <div className="row">
                <div className="span12">
                  <div className="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div className="row">
                <div className="span6">

                  <h4 className="heading"><strong>Button</strong> sizes<span></span></h4>

                  <p>There are 4 button sizes: mini, small, normal and large</p>

                  <a href="/" className="btn btn-mini btn-primary">mini size</a>
                  <a href="/" className="btn btn-small btn-warning">small size</a>
                  <a href="/" className="btn btn-danger">normal size</a>
                  <a href="/" className="btn btn-large btn-info">Large size</a>

                </div>
                <div className="span6">
                  <h4 className="heading"><strong>Button</strong> edge<span></span></h4>

                  <p>There are 3 button edge variations: normal, rounded and flat. Simply adding <code>btn-rounded</code> or <code>btn-flat</code> className and you'll get different button edge</p>

                  <a href="/" className="btn btn-primary">normal primary</a>

                  <a href="/" className="btn btn-warning btn-rounded">rounded button</a>
                  <a href="/" className="btn btn-danger btn-flat">flat button</a>

                  <a href="/" className="btn btn-primary btn-large btn-rounded">normal button</a>
                  <a href="/" className="btn btn-warning btn-mini btn-rounded">rounded button</a>
                  <a href="/" className="btn btn-danger btn-medium btn-rounded">flat button</a>
                </div>
              </div>

              {/* <!-- line divider --> */}
              <div className="row">
                <div className="span12">
                  <div className="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              {/* <!-- Default table --> */}
              <div className="row">
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - default style<span></span></h4>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          First Name
                    </th>
                        <th>
                          Last Name
                    </th>
                        <th>
                          Username
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                    </td>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @mdo
                    </td>
                      </tr>
                      <tr>
                        <td>
                          2
                    </td>
                        <td>
                          Jacob
                    </td>
                        <td>
                          Thornton
                    </td>
                        <td>
                          @fat
                    </td>
                      </tr>
                      <tr>
                        <td>
                          3
                    </td>
                        <td>
                          Larry
                    </td>
                        <td>
                          the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - default with Zebra-Striping<span></span></h4>

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          First Name
                    </th>
                        <th>
                          Last Name
                    </th>
                        <th>
                          Username
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                    </td>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @mdo
                    </td>
                      </tr>
                      <tr>
                        <td>
                          2
                    </td>
                        <td>
                          Jacob
                    </td>
                        <td>
                          Thornton
                    </td>
                        <td>
                          @fat
                    </td>
                      </tr>
                      <tr>
                        <td>
                          3
                    </td>
                        <td>
                          Larry
                    </td>
                        <td>
                          the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div className="row">
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - default with borders<span></span></h4>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          First Name
                    </th>
                        <th>
                          Last Name
                    </th>
                        <th>
                          Username
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">
                          1
                    </td>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @mdo
                    </td>
                      </tr>
                      <tr>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @TwBootstrap
                    </td>
                      </tr>
                      <tr>
                        <td>
                          2
                    </td>
                        <td>
                          Jacob
                    </td>
                        <td>
                          Thornton
                    </td>
                        <td>
                          @fat
                    </td>
                      </tr>
                      <tr>
                        <td>
                          3
                    </td>
                        <td colSpan="2">
                          Larry the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - default with hover enabled<span></span></h4>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          First Name
                    </th>
                        <th>
                          Last Name
                    </th>
                        <th>
                          Username
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                    </td>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @mdo
                    </td>
                      </tr>
                      <tr>
                        <td>
                          2
                    </td>
                        <td>
                          Jacob
                    </td>
                        <td>
                          Thornton
                    </td>
                        <td>
                          @fat
                    </td>
                      </tr>
                      <tr>
                        <td>
                          3
                    </td>
                        <td colSpan="2">
                          Larry the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- divider --> */}
              <div className="row">
                <div className="span12">
                  <div className="solidline">
                  </div>
                </div>
              </div>
              {/* <!-- end divider --> */}
              <div className="row">
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - Cutting cell padding in half<span></span></h4>

                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          First Name
                    </th>
                        <th>
                          Last Name
                    </th>
                        <th>
                          Username
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                    </td>
                        <td>
                          Mark
                    </td>
                        <td>
                          Otto
                    </td>
                        <td>
                          @mdo
                    </td>
                      </tr>
                      <tr>
                        <td>
                          2
                    </td>
                        <td>
                          Jacob
                    </td>
                        <td>
                          Thornton
                    </td>
                        <td>
                          @fat
                    </td>
                      </tr>
                      <tr>
                        <td>
                          3
                    </td>
                        <td colSpan="2">
                          Larry the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="span6">
                  <h4 className="heading"><strong>Table</strong> - Color table rows<span></span></h4>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          #
                    </th>
                        <th>
                          Product
                    </th>
                        <th>
                          Payment Taken
                    </th>
                        <th>
                          Status
                    </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="success">
                        <td>
                          1
                    </td>
                        <td>
                          TB - Monthly
                    </td>
                        <td>
                          01/04/2012
                    </td>
                        <td>
                          Approved
                    </td>
                      </tr>
                      <tr className="error">
                        <td>
                          2
                    </td>
                        <td>
                          TB - Monthly
                    </td>
                        <td>
                          02/04/2012
                    </td>
                        <td>
                          Declined
                    </td>
                      </tr>
                      <tr className="warning">
                        <td>
                          3
                    </td>
                        <td>
                          TB - Monthly
                    </td>
                        <td>
                          03/04/2012
                    </td>
                        <td>
                          Pending
                    </td>
                      </tr>
                      <tr className="info">
                        <td>
                          4
                    </td>
                        <td>
                          TB - Monthly
                    </td>
                        <td>
                          04/04/2012
                    </td>
                        <td>
                          Call in to confirm
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer ================================================== --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="span3">
              <div className="widget">
                {/* <!-- logo --> */}
                <div className="footerlogo">
                  <h6><a href="index.html">Plato</a></h6>
                  {/* <!-- <img src="./assets/img/logo.png" alt="" /> --> */}
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

      <script src="./assets/js/jquery.js"></script>
      <script src="./assets/js/modernizr.js"></script>
      <script src="./assets/js/jquery.easing.1.3.js"></script>
      <script src="./assets/js/google-code-prettify/prettify.js"></script>
      <script src="./assets/js/bootstrap.js"></script>
      <script src="./assets/js/jquery.prettyPhoto.js"></script>
      <script src="./assets/js/portfolio/jquery.quicksand.js"></script>
      <script src="./assets/js/portfolio/setting.js"></script>
      <script src="./assets/js/hover/jquery-hover-effect.js"></script>
      <script src="./assets/js/jquery.flexslider.js"></script>
      <script src="./assets/js/classNameie.js"></script>
      <script src="./assets/js/cbpAnimatedHeader.min.js"></script>
      <script src="./assets/js/jquery.refineslide.js"></script>
      <script src="./assets/js/jquery.ui.totop.js"></script>

      {/* <!-- Template Custom Javascript File --> */}
      <script src="./assets/js/custom.js"></script>

    </React.Fragment>
  );
}