import React from 'react';

class StatusBadge extends React.Component {
constructor(props) {
    super(props);
}

  render() {
  // @props:
  // color = sets the background color ( Bootstrap colors, i.e.: primary, secondary, dark...)
  //  id = Sets the ID for the badge
  //  text = text to be displayed
  if(this.props.href !== '' || href !== undefined) {
    const aLink = document.createElement('a');
    aLink.setAttribute('href', this.props.href);
    console.log(aLink);
  }

  return(
    <span 
      className={`badge badge-pill badge-${this.props.color}`}
      id={ this.props.id }>
      { this.props.text }
    </span>
    );
  }
}

 export default StatusBadge;
