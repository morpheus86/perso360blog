import React from 'react'
import { NavItem, NavDropdown, MenuItem, Navbar, Nav } from 'react-bootstrap'
import SigneInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks';

const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          {/* <LinkContainer> */}
          <a href="#brand">Perso360</a>
          {/* </LinkContainer> */}
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
      </NavItem>
          <NavItem eventKey={2} href="#">
            Link
      </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <SigneInLinks />
        <SignedOutLinks />
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation