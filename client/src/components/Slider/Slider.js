import React from 'react';
import './Slider.css'

// FIXME: fix slide feature
export const Slider = props => {
  

  const imgUrl = 'https://picsum.photos/200/300'
  return (
    <React.Fragment>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 slider-img" src={imgUrl} alt="First slide" id="1"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgUrl} alt="Second slide" id="2"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imgUrl} alt="Third slide" id="3"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  )
}