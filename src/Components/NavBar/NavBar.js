import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    const [username, setUsername] = useState();

    useEffect(() => {
        if (localStorage.getItem("sessionID")) {
            const getAccount = async () => {
                try {
                    let response = await axios.get(
                        `${process.env.REACT_APP_APIURL}account?api_key=${
                            process.env.REACT_APP_APIKEY
                        }&session_id=${localStorage.getItem("sessionID")}`
                    );
                    setUsername(response.data.username);
                } catch (error) {
                    console.log(error);
                }
            };
            getAccount();
        }
    }, []);

    const renderLoginLogout = () => {
        if (localStorage.getItem("sessionID")) {
            const handleLogout = async () => {
                try {
                    await axios({
                        method: "delete",
                        url: `${process.env.REACT_APP_APIURL}authentication/session?api_key=${process.env.REACT_APP_APIKEY}`,
                        data: {
                            session_id: localStorage.getItem("sessionID"),
                        },
                    });
                } catch (error) {
                    console.log(error);
                }
                localStorage.removeItem("sessionID");
                window.location.href = "/";
            };
            return (
                <>
                    <span>
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {username}
                                </a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a className="dropdown-item bg-dark text-light" href="/" onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </>
            );
        }

        return (
            <>
                <span>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">
                            Login
                        </a>
                    </li>
                </span>
            </>
        );
    };

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-dark px-4">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center navbar-logo text-decoration-none" href="/">
                        <i className="ri-play-circle-fill me-1"></i>VIDPORT
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="ri-menu-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/Movie">Movie</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/TVShow">TV Show</a>
                            </li>
                        </ul>
                        {renderLoginLogout()}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
