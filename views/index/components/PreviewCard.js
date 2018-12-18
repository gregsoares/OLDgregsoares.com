import React from 'react';

class PreviewCard extends React.Component {
  render() {
    return (
      <span className="PreCardBody" color={this.props.cardTitle}>{ this.props.cardTitle }
        <div className="PreCardHeader">
          <div className="PreCardOne">
            <div className="PreCardTwo">
              <div className="PreCardThree" color={this.props.color}>{this.props.color}

              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default PreviewCard;
