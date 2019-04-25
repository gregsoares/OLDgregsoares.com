import React from 'react'

function ContactCard(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const cards = props.cards;

  return (
  <section className="bg-light" id="team"> 
    <div className="container"> 
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{title}</h2>
          <h3 className="section-subheading text-muted">{subtitle}</h3>
        </div>
      </div>
                <div className="row">
      {/* Begin rendering cards */}
          {cards.map( (card, index) => {
            if(cards.length !== 0) {
              return (
                  <div className="col-sm-4">
                    <div className="team-member">
                      <img className="mx-auto rounded-circle" src={card.imgPath} alt="" />
                      <h4>{card.title}</h4>
                      <p className="text-muted">{card.subtitle}</p>
                      <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> 
              )}
          })}
          </div> 
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
  ) 
}

export default ContactCard

