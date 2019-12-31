import React from 'react';

//props: Content = react components to fill container
export const Container = props => {

  return(
    <div className="row px-2">
          <div className="bg-secondary container-fluid">
      { props.Content }
    </div>
    </div>
  )
}