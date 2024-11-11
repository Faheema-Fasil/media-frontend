import React from 'react'
import {Container,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
       <Link to="/" style={{textDecoration:'none'}}>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/11620/11620813.png?semt=ais_hybrid"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span style={{
              fontSize:'30px'
            }}>MEDIA-PLAYER</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
       
       </Link>
    </>
  )
}

export default Header
