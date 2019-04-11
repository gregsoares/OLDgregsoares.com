import React from 'react';
import Footer from '../../Footer/Footer';
// import { Container, Row, Col } from 'reactstrap';

// import components

export default class IndexLayout extends React.Component {
  render() {
    return (
      <div id="page-wrapper">

      <header id="header" className="alt">
          <h1><a href="/">Solid State</a></h1>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        <nav id="menu">
          <div className="inner">
            <h2>Menu</h2>
            <ul className="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="/">Log In</a></li>
              <li><a href="/">Sign Up</a></li>
            </ul>
            <a href="/" className="close">Close</a>
          </div>
        </nav>

        <section id="banner">
          <div className="inner">
            <div className="logo"><span className="icon fa-diamond"></span></div>
            <h2>This is Solid State</h2>
            <p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
          </div>
        </section>

        <section id="wrapper">

            <section id="one" className="wrapper spotlight style1">
              <div className="inner">
                <a href="/" className="image"><img src="images/pic01.jpg" alt="" /></a>
                <div className="content">
                  <h2 className="major">Magna arcu feugiat</h2>
                  <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                  <a href="/" className="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="two" className="wrapper alt spotlight style2">
              <div className="inner">
                <a href="/" className="image"><img src="images/pic02.jpg" alt="" /></a>
                <div className="content">
                  <h2 className="major">Tempus adipiscing</h2>
                  <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                  <a href="/" className="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="three" className="wrapper spotlight style3">
              <div className="inner">
                <a href="/" className="image"><img src="images/pic03.jpg" alt="" /></a>
                <div className="content">
                  <h2 className="major">Nullam dignissim</h2>
                  <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                  <a href="/" className="special">Learn more</a>
                </div>
              </div>
            </section>

            <section id="four" className="wrapper alt style1">
              <div className="inner">
                <h2 className="major">Vitae phasellus</h2>
                <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                <section className="features">
                  <article>
                    <a href="/" className="#image"><img src="images/pic04.jpg" alt="" /></a>
                    <h3 className="major">Sed feugiat lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="/" className="special">Learn more</a>
                  </article>
                  <article>
                    <a href="/" className="image"><img src="images/pic05.jpg" alt="" /></a>
                    <h3 className="major">Nisl placerat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="/" className="special">Learn more</a>
                  </article>
                  <article>
                    <a href="/" className="image"><img src="images/pic06.jpg" alt="" /></a>
                    <h3 className="major">Ante fermentum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="/" className="special">Learn more</a>
                  </article>
                  <article>
                    <a href="/" className="image"><img src="images/pic07.jpg" alt="" /></a>
                    <h3 className="major">Fusce consequat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                    <a href="/" className="special">Learn more</a>
                  </article>
                </section>
                <ul className="actions">
                  <li><a href="/" className="button">Browse All</a></li>
                </ul>
              </div>
            </section>

        </section>

        <Footer />
      </div>
      );
  }
}