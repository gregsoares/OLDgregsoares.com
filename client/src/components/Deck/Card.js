import React from 'react';

export const Card = props => {

  return (
    <React.Fragment>
      <div className="card text-center mx-1">
        <div className="card-header">
         {props.name} 
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.username}</h5>
          <a className="card-link" href={props.email}>Email</a>
          <p className="card-text">{props.street}</p>
        </div>
        <div className="card-footer text-muted">
          ID: {props.id}
        </div>
      </div>
    </React.Fragment>
  )
}