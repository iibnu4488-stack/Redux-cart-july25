import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
     <Navbar expand="lg" className="bg-primary position-fixed w-100">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast}/>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-md-flex align-items-md-center">
            <Link to={'/wishlist'} className='text-decoration-none text-light fw-bold align-items-center'><FontAwesomeIcon icon={faHeart} className='text-danger'/>WISHLIST<Badge pill bg='dark'className='ms-1'>9</Badge> </Link>
            <Link to={'/cart'} className='text-decoration-none text-light fw-bold align-items-center'><FontAwesomeIcon icon={faCartShopping} className='text-success'/>Cart<Badge pill bg='dark' className='ms-1'>20</Badge> </Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
