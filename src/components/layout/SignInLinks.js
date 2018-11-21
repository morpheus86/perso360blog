import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedInLinks = (props) => {
  return (
    <Nav pullRight>
      <LinkContainer to='/create'>
        <NavItem>
          New Project
      </NavItem>
      </LinkContainer>
      <LinkContainer to='/'>
        <NavItem>
          Log Out
      </NavItem>
      </LinkContainer>
    </Nav>
  )
}

export default SignedInLinks