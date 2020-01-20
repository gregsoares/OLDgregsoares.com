import React from 'react';

export const FeaturedContent = props => {

  return (
    <React.Fragment>
          <div className="row">
            <div className="span4">
              <div className="features">
                <div className="icon">
                  <i className="icon-bg-light icon-circled icon-code icon-5x active"></i>
                </div>
                <div className="features_content">
                  <h3>Valid Coding</h3>
                  <p className="left">
                    Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
              </p>
                  <a href="/" className="btn btn-color btn-rounded"><i className="icon-angle-right"></i> Read more</a>
                </div>
              </div>
            </div>
            <div className="span4">
              <div className="features">
                <div className="icon">
                  <i className="icon-bg-dark icon-circled icon-bug icon-5x"></i>
                </div>
                <div className="features_content">
                  <h3>Bug free</h3>
                  <p className="left">
                    Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
              </p>
                  <a href="/" className="btn btn-color btn-rounded"><i className="icon-angle-right"></i> Read more</a>
                </div>
              </div>
            </div>
            <div className="span4">
              <div className="features">
                <div className="icon">
                  <i className="icon-bg-dark icon-circled icon-android icon-5x"></i>
                </div>
                <div className="features_content">
                  <h3>Mobile ready</h3>
                  <p className="left">
                    Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri mel virtute nam.
              </p>
                  <a href="/" className="btn btn-color btn-rounded"><i className="icon-angle-right"></i> Read more</a>
                </div>
              </div>
            </div>

          </div>
    </React.Fragment>
  )
}