import React from 'react';
import IconCard from './IconCard';

function IconCardSection(props) {
    const title = props.title;
    const subtitle = props.subtitle;

    
  return (
      <section id="topThree">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{title}</h2>
              <h3 className="section-subheading text-muted">{subtitle }</h3>
            </div>
          </div>
          <div className="row text-center">
          {/* TODO: Display IconCards here */}
          

          </div>
        </div>
      </section>
  )
}
 export default IconCardSection;