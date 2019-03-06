import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class MyNavbar extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
      <div className='mx-auto d-sm-flex d-block flex-sm-nowra'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar navbar-expand-sm navbar-light bg-light" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#home">Tech Stack</Nav.Link>
        <Nav.Link href="#home">Portfolio</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      <NavDropdown title="Links" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://twitter.com/NezziJohn">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/johnnezzi">GitHub</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  
    )
}
}