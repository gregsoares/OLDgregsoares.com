import React from 'react';

//props: Content = react components to fill container
export const Container = props => {

  return (
    <div className="row m-0 px-2 bg-secondary justify-content-center" data-test="Container">
      {props.Content}
    </div>
  )
}