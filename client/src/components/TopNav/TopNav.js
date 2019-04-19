import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopNav extends Component {
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

  componentDidMount(){
      window.addEventListener('scroll', (event) => {
         if(window.scrollY > 100){
             document.getElementById('mainNav').className='navbar navbar-expand-lg bg-dark fixed-top navbar-shrink';
         }else{
             document.getElementById('mainNav').className='navbar navbar-expand-lg bg-dark fixed-top';
         }
      });
  }

  // FIXME: Fix removeEventListener
  componentWillUnmount(){
    // window.removeEventListener('scroll');
  }

  render() {
    return (
      <Navbar className="" expand="lg" color="dark" fixed="top" id="mainNav">
        <NavbarBrand href="#page-top" className="js-scroll-trigger" >GregSoares</NavbarBrand>
          <NavbarToggler onClick={this.toggle} > Menu <i className="fas fa-bars"></i> </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} id="navbarResponsive" navbar>
          <Nav className="ml-auto text-uppercase" navbar>
            <NavItem>
              <NavLink href="#home" className="js-scroll-trigger" > Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio" className="js-scroll-trigger" > Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className="js-scroll-trigger" > About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team" className="js-scroll-trigger" > Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="js-scroll-trigger" > Contact</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
