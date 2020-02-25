import React from 'react'

export const Skills = () => {
  return (
    <div>
      {/* <!--========================== */}
      {/* Skills Section */}
      {/* ============================--> */}
      <section id="skills">
        <div className="container">

          <header className="section-header">
            <h3>Our Skills</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          </header>

          <div className="skills-content">

            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">HTML <i className="val">100%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">CSS <i className="val">90%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">JavaScript <i className="val">75%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">Photoshop <i className="val">55%</i></span>
              </div>
            </div>

          </div>

        </div>
      </section>


    </div>
  )
}