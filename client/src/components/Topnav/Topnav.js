import React from 'react';

import { Navlink } from './Navlink'

// PropList: current

// FIXME: Topnav links should be horizontal
// FIXME: Collapsed button doesn't expand Topnav
export const Topnav = props => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" data-test='Topnav' >
        <a className="navbar-brand" href="/">GregSoares.com</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" data-test="navlink-list">
              { Navlink(props.current, 'Home') }
              { Navlink(props.current, 'Github') }
              { Navlink(props.current, 'Dev Projects') }
              { Navlink(props.current, 'Networking Projects') }

          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}