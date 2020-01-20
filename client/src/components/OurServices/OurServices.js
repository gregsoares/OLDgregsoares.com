import React from 'react';

export const OurServices = props => {

  return (
    <React.Fragment>
          <div className="row">
            <div className="span6">
              <h4>What people say about us</h4>
              <div className="testmonial_slider">
                <ul className="slides">
                  <li>
                    <div className="testimonial_item">
                      <p>
                        Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                  </p>
                      <span className="author">Johny doe</span>
                      <span className="occupation">Graphic and HTML Web Designer</span>
                      {/* <!-- end testmonial --> */}
                    </div>
                  </li>
                  <li>
                    <div className="testimonial_item">
                      <p>
                        Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                      <span className="author">John Doe</span>
                      <span className="occupation">CEO Engineer</span>
                      {/* <!-- end testmonial --> */}
                    </div>
                  </li>
                  <li>
                    <div className="testimonial_item">
                      <p>
                        libero quam euismod quam, sed sodales purus nisl eget felis. Pellentesque elit massa, cursus id.
                  </p>
                      <span className="author">Roro Still</span>
                      <span className="occupation">New In Field</span>
                      {/* <!-- end testmonial --> */}
                    </div>
                  </li>
                </ul>
                {/* <!-- end testmonial slider --> */}
              </div>
              <div className="blank"></div>

              <h4>Our satisfied clients</h4>
              <ul className="clients">
                <li>
                  <a href="/">
                    <img src="assets/img/dummies/clients/client1.png" className="client-logo" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/img/dummies/clients/client2.png" className="client-logo" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="assets/img/dummies/clients/client3.png" className="client-logo" alt="" />
                  </a>
                </li>

              </ul>

            </div>

            <div className="span6">
              <h4>Our services</h4>
              {/* <!-- start: Accordion --> */}
              <div className="accordion" id="accordion2">
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <a className="accordion-toggle active" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                      <i className="icon-caret-down"></i> Social media optimization </a>
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
                      <i className="icon-caret-right"></i> Web design and development </a>
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
                      <i className="icon-caret-right"></i> Business strategy and management </a>
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
    </React.Fragment>
  )
}