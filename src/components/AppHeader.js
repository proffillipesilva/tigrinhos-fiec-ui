import React from 'react'
//import {Navbar} from 'konsta/react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppHeader() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg={""} style={{backgroundColor: "purple"}}>
      <Container>
        <Navbar.Brand href="#home">Tigrinhos Fiec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to={"login"}>Login</Link></Nav.Link>
            <Nav.Link ><Link to={"games"}>Games</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppHeader