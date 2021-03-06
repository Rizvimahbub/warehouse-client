import React, { useState } from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../authentification.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const signOutProcess = () => {
        signOut(auth)
            .then(() => {
                navigate('/login')
            })
    }
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bolder brand' href="#home">Bikescape</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className=' fw-bolder fs-5' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className=' fw-bolder fs-5' as={Link} to="about">About</Nav.Link>
                            


                            {
                                user &&
                                <>
                                    <Nav.Link className=' fw-bolder fs-5' as={Link} to="inventory">Manage Inventory</Nav.Link>
                                    <Nav.Link className=' fw-bolder fs-5' as={Link} to="form">Add Item</Nav.Link>
                                    <Nav.Link className=' fw-bolder fs-5' as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <Nav.Link onClick={signOutProcess} className=' fw-bolder fs-5' as={Link} to="login">Sign out</Nav.Link>
                                    :
                                    <Nav.Link className=' fw-bolder fs-5' as={Link} to="login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;