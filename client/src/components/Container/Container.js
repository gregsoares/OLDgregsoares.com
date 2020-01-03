import React from 'react';

//props: Content = react components to fill container
export const Container = props => {

  return(
    <div className="row px-2" data-test="Container">
          <div className="bg-secondary container-fluid py-2">
      { props.Content }
    </div>
    </div>
  )
}