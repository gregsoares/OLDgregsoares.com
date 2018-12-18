import React from 'react';

class StatusBadge extends React.Component {
  render() {
    return(
            <Badge color={this.props.id}>{this.props.id}</Badge>
        );
      }
}
 export default StatusBadge;
