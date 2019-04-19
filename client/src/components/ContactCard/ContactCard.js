import React from 'react'

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon:'',
      title: '',
      text:'',
      cards: []
    }
  }
   componentDidMount(){
              console.log(this.state.cards);
         if(this.state.cards.length !== 0) {
             var cardDeck = document.createElement('cardDeck');
             cardDeck.className = 'col-sm-4';
             cardDeck.appendChild('div');
             cardDeck.firstChild.className = 'team-member';
             cardDeck.firstChild.appendChild('img');
             
             let iconNode = cardDeck.lastChild;
             iconNode.className = 'mx-auto rounded-circle';
             iconNode.src = './img/team/1.jpg'
         }
         document.getElementById('cardDeck').appendChild(this.newCard(cardDeck));
            
         
        }
    //   <div className="col-sm-4">
    //   <div className="team-member">
    //     <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
    //     <h4>Kay Garland</h4>
    //     <p className="text-muted">Lead Designer</p>
    //     <ul className="list-inline social-buttons">
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-twitter"></i>
    //         </a>
    //       </li>
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-facebook-f"></i>
    //         </a>
    //       </li>
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-linkedin-in"></i>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  newCard(element, icon, title, text) {
    let deckOfCards = document.createElement('span');
    let cardFrame = deckOfCards.cloneNode();
    cardFrame.className ='col-sm-4' ;
    let innerDiv = cardFrame.cloneNode();
    innerDiv.className = 'team-member';
    let newCard = cardFrame.cloneNode();
    newCard.className = '';
    cardFrame.appendChild(innerDiv);
    //     <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
    //     <h4>Kay Garland</h4>
    //     <p className="text-muted">Lead Designer</p>
    //     <ul className="list-inline social-buttons">
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-twitter"></i>
    //         </a>
    //       </li>
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-facebook-f"></i>
    //         </a>
    //       </li>
    //       <li className="list-inline-item">
    //         <a href="/">
    //           <i className="fab fa-linkedin-in"></i>
    //         </a>
    //       </li>
    //     </ul>

        
    //   deckOfCards.appendChild(newCard);
    //   });
    return deckOfCards; 
  }
        render() {
          return (
            <div id='cardDeck'>

            </div>
          ) 
        }
  }

export default ContactCard

