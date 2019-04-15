import React, { Component } from 'react';

// TODO Convert to pure stateless function component
// TODO Refactor to reactstrap standard
class TopHeader extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>
    );
  }
}

export default TopHeader;
