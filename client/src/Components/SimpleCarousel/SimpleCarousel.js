import React from 'react'

export const SimpleCarousel = () => {
  return (
    <div>
    {/* <!--========================== */}
      {/* Clients Section */}
    {/* ============================--> */}
    <section id="clients" className="wow fadeInUp">
      <div className="container">

        <header className="section-header">
          <h3>Our Clients</h3>
        </header>

        <div className="owl-carousel clients-carousel">
          <img src="img/clients/client-1.png" alt=" " />
          <img src="img/clients/client-2.png" alt=" " />
          <img src="img/clients/client-3.png" alt=" " />
          <img src="img/clients/client-4.png" alt=" " />
          <img src="img/clients/client-5.png" alt=" " />
          <img src="img/clients/client-6.png" alt=" " />
          <img src="img/clients/client-7.png" alt=" " />
          <img src="img/clients/client-8.png" alt=" " />
        </div>

      </div>
    </section>
{/* <!-- #clients --> */}
    </div>
  )
}