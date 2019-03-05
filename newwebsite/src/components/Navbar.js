import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class MyNavbar extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">J S Nezzi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">About</Nav.Link>
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
</Navbar>
  
    )
}
}