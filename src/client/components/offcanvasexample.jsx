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
    button = <Button 
    onClick={async ()=>{props.signOut();}}>Sign out</Button>
  }else{
    button = <Button 
    style={{backgroundColor: 'white', color: '#6495ed', borderColor: 'white' ,textAlign: 'left', padding: '0'}} 
    onClick={()=>{navigate('/login')}}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#e6e6fa';
      e.target.style.color = '#6495ed';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'white';
      e.target.style.color = '#6495ed';
    }}>
      
      <span style={{ display: 'flex', alignItems: 'left' }}>Sign in</span>
    </Button>
  }

  return (
    <Navbar style={{ backgroundColor: '#00008b' }} expand={false}>
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
            <Nav className="justify-content-end flex-grow-1">
              <Link className="nav-link" to='/' style={{ 
                  color: '#6495ed',
                  textDecoration: 'none', 
                  transition: 'background-color 0.3s'

                  // padding: 10,
                  // margin: 8
                }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e6e6fa'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >Video</Link>
              <Link className="nav-link" to='/post'
                style={{ 
                  color: '#6495ed', 
                  textDecoration: 'none', 
                  transition: 'background-color 0.3s'
                  // padding: 10,
                  // margin: 8
                }} onMouseEnter={(e) => e.target.style.backgroundColor = '#e6e6fa'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >Streaming</Link>
            </Nav>
            {button}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default OffcanvasExample;