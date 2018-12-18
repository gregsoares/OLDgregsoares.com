import React from 'react';

//  @Props:
//    * cardId  - @desc: 
//    * cardTitleText - @desc: 
//    * cardSubtitleText - @desc: 
//    * cardBodyText - @desc: 
//    * cardLinkOne - @desc: 
//    * cardLinkTwo - @desc: 
// 

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span id={ this.props.cardId }>
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{ this.props.cardTitleText }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ this.props.cardSubtitleText }</h6>
            <p className="card-text">{ this.props.cardBodyText }</p>
            <a href={ this.props.cardLinkOne } className="card-link">{ this.props.cardLinkOneText }</a>
            <a href={ this.props.cardLinkTwo }  className="card-link">{ this.props.cardLinkTwoText }</a>
          </div>
        </div>
      </span>
    );
  }
}

export default PreviewCard;
