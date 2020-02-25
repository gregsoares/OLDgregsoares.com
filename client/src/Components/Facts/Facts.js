import React from 'react'

export const Facts = () => {
  return (
    <div>
      {/* <!--========================== */}
      {/* Facts Section */}
      {/* ============================--> */}
      <section id="facts" className="wow fadeIn">
        <div className="container">

          <header className="section-header">
            <h3>Facts</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </header>

          <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">274</span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">421</span>
              <p>Projects</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1,364</span>
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">18</span>
              <p>Hard Workers</p>
            </div>

          </div>

          <div className="facts-img">
            <img src="img/facts-img.png" alt="" className="img-fluid " />
          </div>

        </div>
      </section>
      {/* <!-- #facts --> */}

    </div>
  )
}