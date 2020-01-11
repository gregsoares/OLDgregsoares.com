import React from 'react';


export const ItemCard = props => {

  return (
    <React.Fragment>
      <header className="bg-primary text-center py-5 mb-4 ">
        <div className="container">
          <h1 className="font-weight-light text-white">Meet the Team</h1>
        </div>
      </header>

      {/* Page Content */}
      <div className="container">
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 2 --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 3 --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 4 --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
              <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">Team Member</h5>
                <div className="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}

      </div>
    </React.Fragment>
  )
}