import React from 'react';

export const Navlink = ( current , page ) => {
    if(current === page) {
        return (
          <li className="nav-item active">
            <a className="nav-link" href="/">{page}
            </a> <span className="sr-only">(current)</span>
          </li>)
  } else {
        return (
          <li className="nav-item">
            <a className="nav-link" href="/">{page}
            </a>
          </li>)
        }
  }