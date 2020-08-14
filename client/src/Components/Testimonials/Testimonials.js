import React from "react";

const Testimonials = (props) => {
  // TODO: on componentDidMount load all testimonials

  const carouselItem = (testimonial) => {
    return (
      <div className="carousel-item active ">
        <div className="top-top">
          <h2>{testimonial.title}</h2>
          <p>{testimonial.text}</p>
          <h4>
            {testimonial.authorName}
            <span>{testimonial.authorPosition} </span>
          </h4>
        </div>
      </div>
    );
  };

  // FIXME: onClick() make change to className to add/remove "active" from carousel-item div and <li data-target>
  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Testimonials Section */}
      {/* ============================--> */}

      <section
        id="testimonials"
        className="padd-section text-center wow fadeInUp"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="testimonials-content">
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    {carouselItem(props.content)}

                    {/* <div className="carousel-item">
                      <div className="top-top">

                        <h2>Second Testimonial</h2>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries.</p>
                        <h4>Henderson<span>manager</span></h4>

                      </div>
                    </div>

                    <div className="carousel-item active">
                      <div className="top-top">

                        <h2>Volumes us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries.</p>
                        <h4>David Spark<span>manager</span></h4>

                      </div>
                    </div> */}
                  </div>

                  <div className="btm-btm">
                    <ul className="list-unstyled carousel-indicators">
                      <li
                        data-target="#carousel-example-generic"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carousel-example-generic"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carousel-example-generic"
                        data-slide-to="2"
                      ></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Testimonials;
