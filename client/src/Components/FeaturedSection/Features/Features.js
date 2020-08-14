
import React from "react";

const Features = props => {

  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Features Section */}
      {/* ============================--> */}

      <section id="features" className="padd-section text-center wow fadeInUp">

        <div className="container">
          <div className="section-title text-center">
            <h2>Amazing Features.</h2>
            <p className="separator">Integer cursus bibendum augue ac cursus .</p>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/paint-palette.svg" alt="img" className="img-fluid" />
                <h4>creative design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/vector.svg" alt="img" className="img-fluid" />
                <h4>Retina Ready</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/design-tool.svg" alt="img" className="img-fluid" />
                <h4>easy to use</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/asteroid.svg" alt="img" className="img-fluid" />
                <h4>Free Updates</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/asteroid.svg" alt="img" className="img-fluid" />
                <h4>Free Updates</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/cloud-computing.svg" alt="img" className="img-fluid" />
                <h4>App store support</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/pixel.svg" alt="img" className="img-fluid" />
                <h4>Perfect Pixel</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/code.svg" alt="img" className="img-fluid" />
                <h4>clean codes</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Features;