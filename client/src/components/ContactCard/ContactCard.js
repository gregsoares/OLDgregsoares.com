import React from 'react'

function ContactCard(props) {
  const title = props.title;
  const text = props.text;
  const cards = props.cards;

  return (
    <div id='cardDeck'>
      <div className="col-sm-4">
        <div className="team-member">
          {cards.map( (card, index) => {
            if(cards.length !== 0) {
              return (
                <div className="text-center">
                  <div className="cardDeck">
                  {card.title}
                    <div className="col-sm-4">
                      <div className="team-member"><img src={card.imgPath} alt="" className="mx-auto rounded-circle"/></div>
                    </div>
                  </div>
                </div>
              )}
          })}
        </div>
      </div> 
    </div>
  ) 
}

export default ContactCard

