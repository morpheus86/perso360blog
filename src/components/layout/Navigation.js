import React from 'react'
import { NavItem, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SigneInLinks from './SignInLinks'
import SignedOutLinks from './SignOutLinks';

const Navigation = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
         Perso360Blog
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/'> 
          <NavItem>DashBoard</NavItem>
          </LinkContainer>
          <LinkContainer to='/project/:id'>
          <NavItem to='/project/:id'>Project</NavItem>
          </LinkContainer>
          <LinkContainer to='/create'>
          <NavItem>New Project</NavItem>
          </LinkContainer>
          </Nav>
        <SigneInLinks />
        <SignedOutLinks />
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation