import React from 'react'

export const IntroCarousel = () => {
  return (
    <div>

      {/* <!--========================== */}
      {/* Intro Section */}
      {/* ============================--> */}
      <section id="intro">
        <div className="intro-container">
          <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">
                <div className="carousel-background"><img src="img/intro-carousel/1.jpg" alt=" " /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>We are professional</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background"><img src="img/intro-carousel/2.jpg" alt=" " /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>At vero eos et accusamus</h2>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background"><img src="img/intro-carousel/3.jpg" alt=" " /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Temporibus autem quibusdam</h2>
                    <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background"><img src="img/intro-carousel/4.jpg" alt=" " /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Nam libero tempore</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background"><img src="img/intro-carousel/5.jpg" alt=" " /></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Magnam aliquam quaerat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

          </div>
        </div>
      </section>
      {/* <!-- #intro --> */}

    </div>
  )
}