import React from "react";

// Head imports
// import "https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700"
// import "./assets/css/bootstrap-responsive.css"
// import "./assets/css/docs.css"
// import "./assets/css/prettyPhoto.css"
// import "./assets/js/google-code-prettify/prettify.css"
// import "./assets/css/flexslider.css"
// import "./assets/css/refineslide.css"
// import "./assets/css/font-awesome.css"
// import "./assets/css/animate.css"
// import "./assets/css/bootstrap.css"
// import "./assets/css/style.css"
// import "./assets/color/default.css"
// import favicon from "./assets/ico/favicon.ico"
// import apple144 from "./assets/ico/apple-touch-icon-144-precomposed.png"
// import apple114 from "./assets/ico/apple-touch-icon-114-precomposed.png"
// import apple72 from "./assets/ico/apple-touch-icon-72-precomposed.png"
// import apple57 from "./assets/ico/apple-touch-icon-57-precomposed.png"

export const Plato = props => {

  const links = (
    <React.Fragment>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700" rel="stylesheet" />
      <link href="assets/css/bootstrap-responsive.css" rel="stylesheet" />
      <link href="assets/css/docs.css" rel="stylesheet" />
      <link href="assets/css/prettyPhoto.css" rel="stylesheet" />
      <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet" />
      <link href="assets/css/flexslider.css" rel="stylesheet" />
      <link href="assets/css/refineslide.css" rel="stylesheet" />
      <link href="assets/css/font-awesome.css" rel="stylesheet" />
      <link href="assets/css/animate.css" rel="stylesheet" />
      <link href="assets/css/bootstrap.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/color/default.css" rel="stylesheet" />
      <link rel="shortcut icon" href="./assets/ico/favicon.ico" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png" />
      <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png" />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header>
        {/* Fixme: fix links for icons+images+CSS on HTML file */}
        {/* {links} */}
        {/* <!-- Navbar */}
        {/* ================================================== --> */}
        <div class=" cbp-af-header">
          <div class=" cbp-af-inner">
            <div class="container">
              <div class="row">
                <div class="span4">
                  {/* <!-- logo --> */}
                  <a class="logo" href="index.html">
                    <h1>Plato</h1>
                    {/* <!-- <img src="./assets/img/logo.png" alt="" /> --> */}
                  </a>
                  {/* <!-- end logo --> */}
                </div>

                <div class="span8">
                  {/* <!-- top menu --> */}
                  <div class="navbar">
                    <div class="navbar-inner">
                      <nav>
                        <ul class="nav topnav">
                          <li class="dropdown">
                            <a href="index.html">Home</a>
                          </li>
                          <li class="dropdown active">
                            <a href="#">Features</a>
                            <ul class="dropdown-menu">
                              <li><a href="scaffolding.html">Scaffolding</a></li>
                              <li><a href="base-css.html">Base CSS</a></li>
                              <li><a href="components.html">Components</a></li>
                              <li><a href="icons.html">Icons</a></li>
                              <li><a href="list.html">Styled lists</a></li>
                              <li class="dropdown"><a href="#">3rd level</a>
                                <ul class="dropdown-menu sub-menu">
                                  <li><a href="#">Example menu</a></li>
                                  <li><a href="#">Example menu</a></li>
                                  <li><a href="#">Example menu</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#">Pages</a>
                            <ul class="dropdown-menu">
                              <li><a href="about.html">About us</a></li>
                              <li><a href="pricingtable.html">Pricing table</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#">Portfolio</a>
                            <ul class="dropdown-menu">
                              <li><a href="portfolio-2cols.html">Portfolio 2 columns</a></li>
                              <li><a href="portfolio-3cols.html">Portfolio 3 columns</a></li>
                              <li><a href="portfolio-4cols.html">Portfolio 4 columns</a></li>
                              <li><a href="portfolio-detail.html">Portfolio detail</a></li>
                            </ul>
                          </li>
                          <li class="dropdown">
                            <a href="#">Blog</a>
                            <ul class="dropdown-menu">
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

        <div class="container">
          <div class="row">
            <div class="span4">
              <h3>Template <strong>Components</strong></h3>
            </div>
            <div class="span8">
              <ul class="breadcrumb notop">
                <li><a href="#">Home</a><span class="divider">/</span></li>
                <li class="active">Components</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section id="maincontent">
        <div class="container">
          <div class="row">
            <div class="span12">

              <div class="row">
                <div class="span6">
                  <h4>Tabs</h4>
                  <div class="tabbable">
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#one" data-toggle="tab"><i class="icon-briefcase"></i> One</a></li>
                      <li><a href="#two" data-toggle="tab">Two</a></li>
                      <li><a href="#three" data-toggle="tab">Three</a></li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="one">
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
                      <div class="tab-pane" id="two">
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                        <p>
                          Tale dolor mea ex, te enim assum suscipit cum, vix aliquid omittantur in. Duo eu cibo dolorum menandri, nam sumo dicit admodum ei. Ne mazim commune honestatis cum, mentitum phaedrum sit et.
                    </p>
                      </div>
                      <div class="tab-pane" id="three">
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
                <div class="span6">
                  <h4>Accordion</h4>
                  {/* <!-- start: Accordion --> */}
                  <div class="accordion" id="accordion2">
                    <div class="accordion-group">
                      <div class="accordion-heading">
                        <a class="accordion-toggle active" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                          <i class="icon-caret-down"></i> Collapsible Group Item #1 </a>
                      </div>
                      <div id="collapseOne" class="accordion-body collapse in">
                        <div class="accordion-inner">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                      </div>
                    </div>
                    <div class="accordion-group">
                      <div class="accordion-heading">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                          <i class="icon-caret-right"></i> Collapsible Group Item #2 </a>
                      </div>
                      <div id="collapseTwo" class="accordion-body collapse">
                        <div class="accordion-inner">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                      </div>
                    </div>
                    <div class="accordion-group">
                      <div class="accordion-heading">
                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
                          <i class="icon-caret-right"></i> Collapsible Group Item #3 </a>
                      </div>
                      <div id="collapseThree" class="accordion-body collapse">
                        <div class="accordion-inner">
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
              <div class="row">
                <div class="span12">
                  <div class="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div class="row">
                <div class="span6">
                  <h4>Alerts</h4>
                  <div class="alert">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Warning!</strong> Best check yo self, you're not looking too good.
              </div>
                  <div class="alert alert-error">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </div>
                  <div class="alert alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> Change a few things up and try submitting again.
              </div>
                  <div class="alert alert-info">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Heads up!</strong> Change a few things up and try submitting again.
              </div>
                </div>
                <div class="span6">
                  <h4>Progress</h4>
                  <div class="progress progress-primary">
                    <div class="bar" ></div>
                  </div>
                  <div class="progress progress-striped">
                    <div class="bar" ></div>
                  </div>
                  <div class="progress progress-striped active">
                    <div class="bar" ></div>
                  </div>
                  <div class="progress progress-success">
                    <div class="bar" ></div>
                  </div>

                  <div class="progress progress-info">
                    <div class="bar" ></div>
                  </div>
                  <div class="progress progress-warning">
                    <div class="bar" ></div>
                  </div>
                  <div class="progress progress-danger">
                    <div class="bar" ></div>
                  </div>

                </div>
              </div>

              {/* <!-- line divider --> */}
              <div class="row">
                <div class="span12">
                  <div class="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div class="row">
                <div class="span12">
                  <h4 class="heading"><strong>Button</strong> types<span></span></h4>

                  <a href="#" class="btn">btn default</a>
                  <a href="#" class="btn btn-color">btn color</a>
                  <a href="#" class="btn btn-primary">btn-primary</a>
                  <a href="#" class="btn btn-warning">btn-warning</a>
                  <a href="#" class="btn btn-danger">btn-danger</a>
                  <a href="#" class="btn btn-info">btn-info</a>
                  <a href="#" class="btn btn-success">btn-success</a>
                  <a href="#" class="btn btn-inverse">btn-inverse</a>
                </div>
              </div>

              {/* <!-- line divider --> */}
              <div class="row">
                <div class="span12">
                  <div class="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              <div class="row">
                <div class="span6">

                  <h4 class="heading"><strong>Button</strong> sizes<span></span></h4>

                  <p>There are 4 button sizes: mini, small, normal and large</p>

                  <a href="#" class="btn btn-mini btn-primary">mini size</a>
                  <a href="#" class="btn btn-small btn-warning">small size</a>
                  <a href="#" class="btn btn-danger">normal size</a>
                  <a href="#" class="btn btn-large btn-info">Large size</a>

                </div>
                <div class="span6">
                  <h4 class="heading"><strong>Button</strong> edge<span></span></h4>

                  <p>There are 3 button edge variations: normal, rounded and flat. Simply adding <code>btn-rounded</code> or <code>btn-flat</code> class and you'll get different button edge</p>

                  <a href="#" class="btn btn-primary">normal primary</a>

                  <a href="#" class="btn btn-warning btn-rounded">rounded button</a>
                  <a href="#" class="btn btn-danger btn-flat">flat button</a>

                  <a href="#" class="btn btn-primary btn-large btn-rounded">normal button</a>
                  <a href="#" class="btn btn-warning btn-mini btn-rounded">rounded button</a>
                  <a href="#" class="btn btn-danger btn-medium btn-rounded">flat button</a>
                </div>
              </div>

              {/* <!-- line divider --> */}
              <div class="row">
                <div class="span12">
                  <div class="solid_line"></div>
                </div>
              </div>
              {/* <!-- end divider --> */}

              {/* <!-- Default table --> */}
              <div class="row">
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - default style<span></span></h4>
                  <table class="table">
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
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - default with Zebra-Striping<span></span></h4>

                  <table class="table table-striped">
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


              <div class="row">
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - default with borders<span></span></h4>

                  <table class="table table-bordered">
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
                        <td rowspan="2">
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
                        <td colspan="2">
                          Larry the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - default with hover enabled<span></span></h4>

                  <table class="table table-hover">
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
                        <td colspan="2">
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
              <div class="row">
                <div class="span12">
                  <div class="solidline">
                  </div>
                </div>
              </div>
              {/* <!-- end divider --> */}
              <div class="row">
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - Cutting cell padding in half<span></span></h4>

                  <table class="table table-condensed">
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
                        <td colspan="2">
                          Larry the Bird
                    </td>
                        <td>
                          @twitter
                    </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="span6">
                  <h4 class="heading"><strong>Table</strong> - Color table rows<span></span></h4>

                  <table class="table">
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
                      <tr class="success">
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
                      <tr class="error">
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
                      <tr class="warning">
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
                      <tr class="info">
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
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="span3">
              <div class="widget">
                {/* <!-- logo --> */}
                <div class="footerlogo">
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
            <div class="span3">
              <div class="widget">
                <h5>Browse pages</h5>
                <ul class="list list-ok">
                  <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                  <li><a href="#">Tamquam ponderum at eum, nibh dicta offendit mei</a></li>
                  <li><a href="#">Vix no vidisse dolores intellegam</a></li>
                  <li><a href="#">Est virtute feugiat accommodare eu</a></li>
                </ul>
              </div>
            </div>
            <div class="span3">
              <div class="widget">
                <h5>Flickr photostream</h5>
                <div class="flickr_badge">
                  <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="span3">
              <div class="widget">
                <h5>Keep updated</h5>
                <p>
                  Enter your email to subcribe newsletter
              </p>
                <form>
                  <div class="input-append">
                    <input class="span2" id="appendedInputButton" type="text" />
                    <button class="btn btn-color" type="submit">Subscribe</button>
                  </div>
                </form>
                <ul class="social-network">
                  <li><a href="#"><i class="icon-bg-light icon-facebook icon-circled icon-1x"></i></a></li>
                  <li><a href="#" title="Twitter"><i class="icon-bg-light icon-twitter icon-circled icon-1x"></i></a></li>
                  <li><a href="#" title="Linkedin"><i class="icon-bg-light icon-linkedin icon-circled icon-1x"></i></a></li>
                  <li><a href="#" title="Pinterest"><i class="icon-bg-light icon-pinterest icon-circled icon-1x"></i></a></li>
                  <li><a href="#" title="Google plus"><i class="icon-bg-light icon-google-plus icon-circled icon-1x"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="span6">
                <p>
                  &copy; Plato - All right reserved
              </p>
              </div>
              <div class="span6">
                <div class="pull-right">

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
      <script src="./assets/js/classie.js"></script>
      <script src="./assets/js/cbpAnimatedHeader.min.js"></script>
      <script src="./assets/js/jquery.refineslide.js"></script>
      <script src="./assets/js/jquery.ui.totop.js"></script>

      {/* <!-- Template Custom Javascript File --> */}
      <script src="./assets/js/custom.js"></script>

    </React.Fragment>
  );
}