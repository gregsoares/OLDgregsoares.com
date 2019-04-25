import React, { Component } from 'react';

// TODO Refactor to reactstrap standard
/* TODO: change:
  *  props.text to props.btnText
  *  props.subtitle to props.text
*/
// TODO: Fix .intro-heading css

// Usage: <TopHeader title text btnText />

const TopHeader = (props) => {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{props.title}</div>
            <div className="intro-heading">{props.subtitle}</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{props.text}</a>
          </div>
        </div>
      </header>
    );
  };

export default TopHeader;
