import React from 'react';

export const OneLineCTA = props => {

  return (
    <React.Fragment>

          {/* <!-- blank divider --> */}
          <div className="row">
            <div className="span12">
              <div className="blank10"></div>
            </div>
          </div>

          <div className="row">
            <div className="span12">
              <div className="cta-box">
                <div className="cta-text">
                  <h2>Put special offer in standout call to action area here</h2>
                </div>
                <div className="cta">
                  <a className="btn btn-large btn-rounded btn-color" href="/">
                    <i className="icon-chevron-right"></i> Call action</a>
                </div>
              </div>
              {/* <!-- end tagline --> */}
            </div>
          </div>

    </React.Fragment>
  )
}