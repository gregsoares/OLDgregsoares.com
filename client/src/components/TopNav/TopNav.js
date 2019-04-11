import React from 'react';

export default () => {
  return(
    <span className="TopNav">
      <header id="header" className="alt">
          <h1><a href="/">Solid State</a></h1>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        <nav id="menu">
          <div className="inner">
            <h2>Menu</h2>
            <ul className="links">
              <li><a href="index.html">Home</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="/">Log In</a></li>
              <li><a href="/">Sign Up</a></li>
            </ul>
            <a href="/" className="close">Close</a>
          </div>
        </nav>
    </span>
  );
}