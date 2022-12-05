import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    const [username, setUsername] = useState();

    useEffect(() => {
        if(localStorage.getItem("sessionID")) {
            const getAccount = async () => {
                try {
                    let response = await axios.get(`${process.env.REACT_APP_APIURL}account?api_key=${process.env.REACT_APP_APIKEY}&session_id=${localStorage.getItem("sessionID")}`);
                    setUsername(response.data.username);
                } catch (error) {
                    console.log(error);
                }
            };
            getAccount();
        }
    },[]);

    const renderLoginLogout = () => {
        if(localStorage.getItem("sessionID")) {
            const handleLogout = async () => {
                try {
                    await axios ({
                        method: "delete",
                        url: `${process.env.REACT_APP_APIURL}authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
                        data: {
                            session_id: localStorage.getItem("sessionID"),
                        },
                    });
                } catch (error) {
                    console.log(error);
                } localStorage.removeItem("sessionID");
                window.location.href = "/";
            };
            return (
                <>
                    <Nav>
                        <Nav.Link href="/#" className='navlink' onClick={handleLogout}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </>
            );
        }

        return (
            <Nav className="me-auto justify-content-end flex-grow-1" navbarScroll>
                <Nav.Link href="/login" className='navlink'>
                    Login
                </Nav.Link>
            </Nav>
        );
    };

    const renderUserName = () => {
        return (
            <>
                <Nav className="me-auto" navbarScroll>
                    <Nav.Link href="/login" className='navlink'>
                        {username}
                    </Nav.Link>
                </Nav>
            </>
        );
    };
    
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" className='navbar px-2 py-1'>
                <Container fluid>
                    <Navbar.Brand href="/" className='d-flex align-items-center navbar-logo'><i className="ri-play-circle-fill me-1"></i>VIDPORT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        {renderUserName()}
                        {renderLoginLogout()}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;