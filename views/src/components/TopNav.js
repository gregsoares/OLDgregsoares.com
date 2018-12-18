import React from 'react';

class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="#">GregSoares.com</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">LinkedIn</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">GitHub</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://gregsoares.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
            <div className="dropdown-menu" aria-labelledby="dropdown03">
              <a className="dropdown-item" href="#">MERN</a>
              <a className="dropdown-item" href="#">GregSoares.com</a>
              <a className="dropdown-item" href="#">HomeNetwork</a>
            </div>
          </li>
        </ul>
      </div>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" />
        </form>
    </nav>
      </div>
    );
  }
}

export default TopNav;
