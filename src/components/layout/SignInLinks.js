import React from 'react'
import { NavItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SignedInLinks = (props) => {
  return (
    <Nav pullRight>
      <LinkContainer to='/'>
        <NavItem eventKey={1}>
          New Project
      </NavItem>
      </LinkContainer>
      <LinkContainer to='/'>
        <NavItem eventKey={2}>
          Log Out
      </NavItem>
      </LinkContainer>
    </Nav>
  )
}

export default SignedInLinks