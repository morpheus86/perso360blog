import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedOutLinks = (props) => {
  return (
    <Nav pullRight>
      <LinkContainer to='/signup'>
        <NavItem>
          Sign Up
      </NavItem>
      </LinkContainer>
      <LinkContainer to='/signin'>
        <NavItem>
          Log In
      </NavItem>
      </LinkContainer>
    </Nav>
  )
}

export default SignedOutLinks