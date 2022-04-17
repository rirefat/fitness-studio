import React from 'react';
import './Navmenu.css'
import logo from '../../images/logo.png'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navmenu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" className='w-25'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Facts</NavDropdown.Item>
                            <NavDropdown.Item href="#gallery/3.2">Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#testimonials/3.3">Testimonials</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav> 
                    <Button className='me-3 login-btn' variant="outline-info">Sign Up</Button>                  
                </Navbar.Collapse>
                </Container>
                </Navbar>   
        </div>
    );
};

export default Navmenu;