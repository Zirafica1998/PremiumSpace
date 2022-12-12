import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../helpers/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function HeaderAdmin() {
    const value = useContext(AuthContext);
    const {setAuthState} = useContext(AuthContext)

    const logout = () =>{
        localStorage.removeItem("accessToken");
        setAuthState({email:"",id:0,status:false});
    }

  return (
    <>
     <Navbar className='header-admin'>
      <Container>
        <Navbar.Brand href="#home">Admin panel</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
            <Nav.Link href="/productsTable">Proizvodi</Nav.Link>
            <Nav.Link href="/blog">Strucni tekstovi</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Prijavljeni kao:<span>{value.authState.email}</span>
          </Navbar.Text>
          <Button variant="primary" onClick={logout}>Odjavi se</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
