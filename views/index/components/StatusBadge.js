import React from 'react';
import { Badge } from 'reactstrap';

class StatusBadge extends React.Component {
  render() {
    return(
            <Badge color={this.props.id}>{this.props.id}</Badge>
        );
      }
}
 export default StatusBadge;
