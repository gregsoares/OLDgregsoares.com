import React from 'react';

import { Slider } from '../Slider/Slider';

export const Jumbotron = props => {

  return(
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <Slider />
        </div>
      </div>
    </React.Fragment>
  )
}
