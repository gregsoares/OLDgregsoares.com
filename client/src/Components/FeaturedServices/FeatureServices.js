import React from 'react'

export const FeaturedServices = props => {
  // FIXME: Show icon passed in from props
  const Service = data => {
      const { icon, title, text } = data;
      return (
        <div className="col-md-4 box text-center">
          {/* <i className="ion-ios-bookmarks-outline"></i> */}
          <h4 className="title"><a href="">{title}</a></h4>
          <p className="description justify-content-center">{text}</p>
        </div>
      )
  }
  return (
    <div>
      {/* <!--========================== */}
      {/* Featured Services Section */}
      {/* ============================--> */}
      <section id="featured-services">
        <div className="container">
          <div className="row">

    {props.content.map(data => Service(data))}
            {/* 
            <div className="col-lg-4 box box-bg">
              <i className="ion-ios-stopwatch-outline"></i>
              <h4 className="title"><a href="">Dolor Sitema</a></h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

            <div className="col-lg-4 box">
              <i className="ion-ios-heart-outline"></i>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div> */}

          </div>
        </div>
      </section>
      {/* <!-- #featured-services --> */}
    </div>
  )
}