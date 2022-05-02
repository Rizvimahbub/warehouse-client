import React from 'react';
import './Header.css';
import Logo from '../../../Images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <img src={Logo}></img>
                    <Navbar.Brand className='fw-bolder brand' href="#home">Bikescape</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className=' fw-bolder fs-5'  href="home#bikes">Bikes</Nav.Link>
                            <Nav.Link className=' fw-bolder fs-5' href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className=' fw-bolder fs-5' href="#deets">More deets</Nav.Link>
                            <Nav.Link className=' fw-bolder fs-5' href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;