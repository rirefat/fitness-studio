import React from 'react';
import './Navmenu.css'
import logo from '../../images/logo.png'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navmenu = () => {
    const navigate =useNavigate();
    const [user]=useAuthState(auth);

    const loginPage =()=>{
        navigate('/login');
    }
    const logoutPage =()=>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='top-navbar'>
                <Container>
                <Navbar.Brand as={Link} to="/" className='w-75'>
                    <img src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="home#home-top">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link href="home#pricing">Pricing</Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            {/* <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item> */}
                            <NavDropdown.Item as={Link} to="/checkout">Checkout</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
                            {/* <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item> */}
                            <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> 
                    {user ? <button className='me-3 login-btn' onClick={logoutPage}>Logout</button>:
                    <button className='me-3 login-btn' onClick={loginPage}>LOGIN</button>}                  
                </Navbar.Collapse>
                </Container>
                </Navbar>   
        </>
    );
};

export default Navmenu;