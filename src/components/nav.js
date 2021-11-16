import React from 'react';
import logo from '../logo.svg';
import {Navbar,Container} from 'react-bootstrap'

const Nav = function(){

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        EMeet
      </Navbar.Brand>
    </Container>
  </Navbar>)
}
export default Nav;
