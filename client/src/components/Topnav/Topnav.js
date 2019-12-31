import React from 'react';

import { Navlink } from './Navlink'

// PropList: current

// FIXME: pass in props.current to Navlink(props.current, page)


export const Topnav = props => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">GregSoares.com</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <div className="mx-auto">
              { Navlink('Home', 'Home') }
              { Navlink(null, 'Github') }
            </div>
            <span className="projects ml-auto">
              { Navlink(null, 'Dev Projects') }
              { Navlink(null, 'Networking Projects') }

            </span>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}