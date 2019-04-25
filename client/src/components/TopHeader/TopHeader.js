import React from 'react';

// Usage: <TopHeader title text btnText />

// TODO Refactor to reactstrap standard

const TopHeader = (props) => {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{props.title}</div>
            <div className="intro-heading">{props.text}</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{props.btnText}</a>
          </div>
        </div>
      </header>
    );
  };

export default TopHeader;
