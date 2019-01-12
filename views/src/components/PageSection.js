import React from 'react';

class PageSection extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
      // @Props:
      //  id:
      //  bgColor: Bootstrap tyle: "bg-dark"/"bg-secondary"
      <span>
        <div className={`row ${this.props.bgColor}`} id={this.props.id}> 
          
        </div>
      </span>
    )}
}

export default PageSection;