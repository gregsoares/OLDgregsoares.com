import React from 'react';

export const Card = props => {

  return (
    <React.Fragment>
      <div class="card text-center mx-1">
        <div class="card-header">
         {props.name} 
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.username}</h5>
          <a class="card-link" href={props.email}>Email</a>
          <p class="card-text">{props.street}</p>
        </div>
        <div class="card-footer text-muted">
          ID: {props.id}
        </div>
      </div>
    </React.Fragment>
  )
}