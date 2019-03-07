import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, animateScroll as scroll } from "react-scroll";

export default class MyNavbar extends React.Component {

  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
      <div className='mx-auto d-sm-flex d-block flex-sm-nowra'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar navbar-expand-sm navbar-light bg-light" >

        
        <Nav.Link>
          <Link 
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          About
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            activeClass="active"
            to="techstack"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          Tech Stack
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          Portfolio
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          Contact
          </Link> 
        </Nav.Link>

      <NavDropdown title="Links" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://twitter.com/NezziJohn">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/johnnezzi">GitHub</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  
    )
}
}