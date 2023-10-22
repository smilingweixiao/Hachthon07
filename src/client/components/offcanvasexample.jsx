import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';


const OffcanvasExample = (props) => {
  const navigate = useNavigate();

  let button;
  if(props.authStatus==='authenticated'){
    button = <Button onClick={async ()=>{props.signOut();}}>Sign out</Button>
  }else{
    button = <Button onClick={()=>{navigate('/login')}}>Sign in</Button>
  }

  return (
    <Navbar style={{ backgroundColor: '#00008b' }} expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
        <Navbar.Brand href="#" style={{ color: 'white' }}>MChackathon07髮際線總是在跟我作隊</Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar`}
          aria-labelledby={`offcanvasNavbarLabel`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
              MChackathon07
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to='/'>Streaming</Link>
              <Link className="nav-link" to='/post'>Video</Link>
            </Nav>
            {button}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffcanvasExample;