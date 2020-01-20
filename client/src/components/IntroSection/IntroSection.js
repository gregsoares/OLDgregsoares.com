import React from 'react';

export const IntroSection = props => {

  return (
    <React.Fragment>

      <section id="intro">

        <div className="container">
          <div className="row">
            <div className="span6">
              <h2><strong>Bootstrap <span className="highlight primary">business theme</span></strong></h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, qui corpora oportere cu. Usu et iudico maluisset, pro ut lobortis vituperatoribus, percipit aliquando efficiendi est ex.
          </p>
              <ul className="list list-ok strong bigger">
                <li>100% Compatible with twitter bootstrap</li>
                <li>Valid HTML5 code and well structured</li>
                <li>Really updatable and easy to customize</li>
              </ul>

            </div>
            <div className="span6">

              <div className="group section-wrap upper" id="upper">
                <div className="section-2 group">
                  <ul id="images" className="rs-slider">
                    <li className="group">
                      <a href="/">
                        <img src="assets/img/slides/refine/slide1.png" alt="" />
                      </a>
                    </li>
                    <li className="group">
                      <a href="/" className="slide-parent">
                        <img src="assets/img/slides/refine/slide2.png" alt="" />
                      </a>
                    </li>
                    <li className="group">
                      <img src="assets/img/slides/refine/slide3.png" alt="" />
                    </li>
                  </ul>
                </div>
                {/* <!-- /.section-2 --> */}
              </div>

            </div>
          </div>
        </div>

      </section>

    </React.Fragment>
  )
}