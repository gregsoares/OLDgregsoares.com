import React from 'react';


class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  //  @Props:
  //    * cardId  - @desc: 
  //    * cardTitleText - @desc: 
  //    * cardSubtitleText - @desc: 
  //    * cardBodyText - @desc: 
  //    * cardLinkOne - @desc: 
  //    * cardLinkTwo - @desc: 
    return (
      <span className='PrevCard' id={ this.props.cardId }>
        <div className="card border border-primary bg-secondary col-sm-12 col-md" >
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
