import React from 'react'

export const CardRow = () => {
  return (
    <div>
      {/* <!--========================== */}
      {/* Team Section */}
      {/* ============================--> */}
      <section id="team">
        <div className="container">
          <div className="section-header wow fadeInUp">
            <h3>Team</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <div className="member">
                <img src="img/team-1.jpg" className="img-fluid" alt=" " />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="member">
                <img src="img/team-2.jpg" className="img-fluid" alt=" " />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="member">
                <img src="img/team-3.jpg" className="img-fluid" alt=" " />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="member">
                <img src="img/team-4.jpg" className="img-fluid" alt=" " />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href=""><i className="fa fa-twitter"></i></a>
                      <a href=""><i className="fa fa-facebook"></i></a>
                      <a href=""><i className="fa fa-google-plus"></i></a>
                      <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- #team --> */}
    </div>
  )
}