import React from 'react'

import './Container.css';

export const Container = props => {
  return (
    <div className="flex mx-1" data-testid="ContainerComponent">
      {props.children}

    </div>
  )
}
