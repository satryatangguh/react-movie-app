import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='navbar px-2 py-1'>
                <Container fluid>
                    <Navbar.Brand href="/home" className='d-flex align-items-center navbar-logo'><i class="ri-play-circle-fill me-1"></i>VIDPORT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto justify-content-end flex-grow-1"
                            navbarScroll
                        >
                            <Nav.Link href="/login" className='navlink'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;