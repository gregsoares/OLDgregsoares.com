import React from 'react';
import IconCard from './IconCard';

/*  Component Legend:
* IconCardSection: (props)
*   title:
*   subtitle:
*   cards: (obj list rendered as IconCards)
*     name
*     title
*     text
*/
function IconCardSection(props) {
    const title = props.title;
    const subtitle = props.subtitle;
    const cards = props.cards;

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
          {/* Render IconCards from props.cards */}
          {cards.map((card, index) => {
            return <IconCard icon={card.icon} title={card.title} text={card.text} key={index} /> 
          } )}
   
          </div>
        </div>
      </section>
  )
}
 export default IconCardSection;