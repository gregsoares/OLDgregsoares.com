import React from "react";

export const TheEvent = props => {

  return (
    <React.Fragment>


      {/* <!--========================== */}
      {/* Header */}
      {/* ============================--> */}
      <header id="header">
        <div className="container">

          <div id="logo" className="pull-left">
            {/* <!-- Uncomment below if you prefer to use a text logo --> */}
            {/* <!-- <h1><a href="#main">C<span>o</span>nf</a></h1>--> */}
            <a href="#intro" className="scrollto"><img src="img/logo.png" alt="" title="" /></a>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="#intro">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#venue">Venue</a></li>
              <li><a href="#hotels">Hotels</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#supporters">Sponsors</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>
            </ul>
          </nav>
          {/* <!-- #nav-menu-container --> */}
        </div>
      </header>
      {/* <!-- #header --> */}

      {/* <!--========================== */}
      {/* Intro Section */}
      {/* ============================--> */}
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <h1 className="mb-4 pb-0">The Annual<br /><span>Marketing</span> Conference</h1>
          <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video"
            data-autoplay="true"></a>
          <a href="#about" className="about-btn scrollto">About The Event</a>
        </div>
      </section>

      <main id="main">

        {/* <!--========================== */}
        {/* About Section */}
        {/* ============================--> */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>About The Event</h2>
                <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                  accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
              est ut optio sequi unde.</p>
              </div>
              <div className="col-lg-3">
                <h3>Where</h3>
                <p>Downtown Conference Center, New York</p>
              </div>
              <div className="col-lg-3">
                <h3>When</h3>
                <p>Monday to Wednesday<br />10-12 December</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--========================== */}
        {/* Speakers Section */}
        {/* ============================--> */}
        <section id="speakers" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Event Speakers</h2>
              <p>Here are some of our speakers</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/1.jpg" alt="Speaker 1" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                    <p>Quas alias incidunt</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/2.jpg" alt="Speaker 2" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                    <p>Consequuntur odio aut</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/3.jpg" alt="Speaker 3" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                    <p>Fugiat laborum et</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/4.jpg" alt="Speaker 4" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
                    <p>Debitis iure vero</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/5.jpg" alt="Speaker 5" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
                    <p>Qui molestiae natus</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img src="img/speakers/6.jpg" alt="Speaker 6" className="img-fluid" />
                  <div className="details">
                    <h3><a href="speaker-details.html">Willow Trantow</a></h3>
                    <p>Non autem dicta</p>
                    <div className="social">
                      <a href="/"><i className="fa fa-twitter"></i></a>
                      <a href="/"><i className="fa fa-facebook"></i></a>
                      <a href="/"><i className="fa fa-google-plus"></i></a>
                      <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* <!--========================== */}
        {/* Schedule Section */}
        {/* ============================--> */}
        <section id="schedule" className="section-with-bg">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Event Schedule</h2>
              <p>Here is our event schedule</p>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
              </li>
            </ul>

            <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

            <div className="tab-content row justify-content-center">

              {/* <!-- Schdule Day 1 --> */}
              <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>09:30 AM</time></div>
                  <div className="col-md-10">
                    <h4>Registration</h4>
                    <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Keynote <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>
              {/* <!-- End Schdule Day 1 --> */}

              {/* <!-- Schdule Day 2 --> */}
              <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>
              {/* <!-- End Schdule Day 2 --> */}

              {/* <!-- Schdule Day 3 --> */}
              <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

                <div className="row schedule-item">
                  <div className="col-md-2"><time>10:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>11:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>12:00 AM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>02:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>03:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2"><time>04:00 PM</time></div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                  </div>
                </div>

              </div>
              {/* <!-- End Schdule Day 2 --> */}

            </div>

          </div>

        </section>

        {/* <!--========================== */}
        {/* Venue Section */}
        {/* ============================--> */}
        <section id="venue" className="wow fadeInUp">

          <div className="container-fluid">

            <div className="section-header">
              <h2>Event Venue</h2>
              <p>Event venue location info and gallery</p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 venue-map">
                <iframe title='iframeTitle' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0"  allowFullScreen></iframe>
              </div>

              <div className="col-lg-6 venue-info">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-8">
                    <h3>Downtown Conference Center, New York</h3>
                    <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="container-fluid venue-gallery-container">
            <div className="row no-gutters">

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/1.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/1.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/2.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/2.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/3.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/3.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/4.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/4.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/5.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/5.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/6.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/6.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/7.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/7.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a href="img/venue-gallery/8.jpg" className="venobox" data-gall="venue-gallery">
                    <img src="img/venue-gallery/8.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* <!--========================== */}
        {/* Hotels Section */}
        {/* ============================--> */}
        <section id="hotels" className="section-with-bg wow fadeInUp">

          <div className="container">
            <div className="section-header">
              <h2>Hotels</h2>
              <p>Her are some nearby hotels</p>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="img/hotels/1.jpg" alt="Hotel 1" className="img-fluid" />
                  </div>
                  <h3><a href="/">Hotel 1</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>0.4 Mile from the Venue</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="img/hotels/2.jpg" alt="Hotel 2" className="img-fluid" />
                  </div>
                  <h3><a href="/">Hotel 2</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-full"></i>
                  </div>
                  <p>0.5 Mile from the Venue</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img src="img/hotels/3.jpg" alt="Hotel 3" className="img-fluid" />
                  </div>
                  <h3><a href="/">Hotel 3</a></h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>0.6 Mile from the Venue</p>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* <!--========================== */}
        {/* Gallery Section */}
        {/* ============================--> */}
        <section id="gallery" className="wow fadeInUp">

          <div className="container">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Check our gallery from the recent events</p>
            </div>
          </div>

          <div className="owl-carousel gallery-carousel">
            <a href="img/gallery/1.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/1.jpg" alt="" /></a>
            <a href="img/gallery/2.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/2.jpg" alt="" /></a>
            <a href="img/gallery/3.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/3.jpg" alt="" /></a>
            <a href="img/gallery/4.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/4.jpg" alt="" /></a>
            <a href="img/gallery/5.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/5.jpg" alt="" /></a>
            <a href="img/gallery/6.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/6.jpg" alt="" /></a>
            <a href="img/gallery/7.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/7.jpg" alt="" /></a>
            <a href="img/gallery/8.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/8.jpg" alt="" /></a>
          </div>

        </section>

        {/* <!--========================== */}
        {/* Sponsors Section */}
        {/* ============================--> */}
        <section id="supporters" className="section-with-bg wow fadeInUp">

          <div className="container">
            <div className="section-header">
              <h2>Sponsors</h2>
            </div>

            <div className="row no-gutters supporters-wrap clearfix">

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/1.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/2.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/3.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/4.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/5.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/6.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/7.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img src="img/supporters/8.png" className="img-fluid" alt="" />
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* <!--========================== */}
        {/* F.A.Q Section */}
        {/* ============================--> */}
        <section id="faq" className="wow fadeInUp">

          <div className="container">

            <div className="section-header">
              <h2>F.A.Q </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <ul id="faq-list">

                  <li>
                    <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq1" className="collapse" data-parent="#faq-list">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq2" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq3" className="collapse" data-parent="#faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq4" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq5" className="collapse" data-parent="#faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </p>
                    </div>
                  </li>

                  <li>
                    <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="fa fa-minus-circle"></i></a>
                    <div id="faq6" className="collapse" data-parent="#faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

          </div>

        </section>

        {/* <!--========================== */}
        {/* Subscribe Section */}
        {/* ============================--> */}
        <section id="subscribe">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Newsletter</h2>
              <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
            </div>

            <form method="POST" action="#">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your Email" />
                </div>
                <div className="col-auto">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>

          </div>
        </section>

        {/* <!--========================== */}
        {/* Buy Ticket Section */}
        {/* ============================--> */}
        <section id="buy-tickets" className="section-with-bg wow fadeInUp">
          <div className="container">

            <div className="section-header">
              <h2>Buy Tickets</h2>
              <p>Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Standard Access</h5>
                    <h6 className="card-price text-center">$150</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                      <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Community Access</li>
                      <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                      <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Pro Access</h5>
                    <h6 className="card-price text-center">$250</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                      <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                      <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="pro-access">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Pro Tier --> */}
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">Premium Access</h5>
                    <h6 className="card-price text-center">$350</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>Workshop Access</li>
                      <li><span className="fa-li"><i className="fa fa-check"></i></span>After Party</li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="premium-access">Buy Now</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Modal Order Form --> */}
          <div id="buy-ticket-modal" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Buy Tickets</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form method="POST" action="#">
                    <div className="form-group">
                      <input type="text" className="form-control" name="your-name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="your-email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <select id="ticket-type" name="ticket-type" className="form-control" >
                        <option value="">-- Select Your Ticket Type --</option>
                        <option value="standard-access">Standard Access</option>
                        <option value="pro-access">Pro Access</option>
                        <option value="premium-access">Premium Access</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn">Buy Now</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- /.modal-content --> */}
            </div>
            {/* <!-- /.modal-dialog --> */}
          </div>
          {/* <!-- /.modal --> */}

        </section>

        {/* <!--========================== */}
        {/* Contact Section */}
        {/* ============================--> */}
        <section id="contact" className="section-bg wow fadeInUp">

          <div className="container">

            <div className="section-header">
              <h2>Contact Us</h2>
              <p>Nihil officia ut sint molestiae tenetur.</p>
            </div>

            <div className="row contact-info">

              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
              </div>

            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>

          </div>
        </section>
        {/* <!-- #contact --> */}

      </main>


      {/* <!--========================== */}
      {/* Footer */}
      {/* ============================--> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <img src="img/logo.png" alt="TheEvenet" />
                <p>In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Home</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">About us</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Services</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Terms of service</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Home</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">About us</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Services</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Terms of service</a></li>
                  <li><i className="fa fa-angle-right"></i> <a href="/">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>

                <div className="social-links">
                  <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="/" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="/" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
      </div>

        </div>
      </footer>
      {/* <!-- #footer --> */}

      <a href="/" className="back-to-top"><i className="fa fa-angle-up"></i></a>

      {/* <!-- JavaScript Libraries --> */}
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/jquery/jquery-migrate.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/superfish/hoverIntent.js"></script>
      <script src="lib/superfish/superfish.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/venobox/venobox.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      {/* <!-- Contact Form JavaScript File --> */}
      <script src="contactform/contactform.js"></script>

      {/* <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>
    </React.Fragment>
  );
}