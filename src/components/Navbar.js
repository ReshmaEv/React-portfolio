import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navigation() {
  return (
    <div>
         <Navbar className='border-bottom shadow' data-bs-theme="dark">
        <Container className='gap-5 '>
          <Navbar.Brand style={{color:"31473A"}} className='fs-1'><Link to='/'>RESHMA.E.V</Link></Navbar.Brand>
          <Nav className=" gap-5 ">
          
            <Link className='fs-5' to='/about'>About</Link>
            <Link className='fs-5' to='/skills'>Skills</Link>
            <Link className='fs-5'to='/project'>project</Link>
            <Link className='fs-5' to='/contact'>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation