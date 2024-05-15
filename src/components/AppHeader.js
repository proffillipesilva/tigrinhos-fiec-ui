import React from 'react'
//import {Navbar} from 'konsta/react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DESLOGAR } from '../store/actions';


function AppHeader(props) {
  const dispatch = useDispatch();
  const deslogar = (e) => {
    localStorage.removeItem('token')
    dispatch({ type: DESLOGAR })
  }
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg={""} style={{ backgroundColor: "purple" }}>
      <Container>
        <Navbar.Brand href="#home">Tigrinhos Fiec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {props.logado &&
        <Navbar.Collapse id="basic-navbar-nav">
        
            <Nav className="me-auto">

              <Nav.Link ><Link to={"games"}>Games</Link></Nav.Link>
              <Nav.Link ><Link to={"manage"}>Cria Game</Link></Nav.Link>
              <Nav.Link ><Link to={"play"}>Play Game</Link></Nav.Link>
              <Button onClick={deslogar}>Deslogar</Button>
            </Nav>
          
        </Navbar.Collapse>
        }
      </Container>
    </Navbar>
  )
}

export default AppHeader