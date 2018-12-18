import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">GregSoares.com</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href='www.linkedin.com/in/greg-soares'>LinkedIn</NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutme">About Me</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  GitHub
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    GregSoares.com
                  </DropdownItem>
                  <DropdownItem>
                     MERN
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Raspberry Pi
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
