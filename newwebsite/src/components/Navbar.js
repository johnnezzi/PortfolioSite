import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, animateScroll as scroll } from "react-scroll";

export default class MyNavbar extends React.Component {

  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top" >
      <div className='mx-auto d-sm-flex d-block flex-sm-nowra'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="forfont navbar navbar-expand-sm navbar-dark bg-dark" >
        <Nav.Link>
          <Link 
            activeClass="active" 
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
          >
          <span className='navfont'>Home</span> 
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
          <span className = 'navfont'> About </span>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link 
            activeClass="active"
            to="stack"
            spy={true}
            smooth={true}
            offset={-300}
            duration= {500}
          >
          <span className = 'navfont'> Tech Stack </span>
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
          <span className = 'navfont'> Portfolio </span>
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
          <span className = 'navfont'> Contact </span>
          </Link> 
        </Nav.Link>

      {/* <NavDropdown  className="navfont" title="Links" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://twitter.com/NezziJohn">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/johnnezzi">GitHub</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  
    )
}
}