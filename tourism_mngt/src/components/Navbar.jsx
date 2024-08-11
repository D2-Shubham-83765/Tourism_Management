import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Images/ShubhYatra-removebg-preview.png';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        const checkUserSession = async () => {
            try {
                const response = await axios.get(`${config.url}/user/login`);
                if (response.data.loggedIn) {
                    setIsLoggedIn(true);
                    setUserEmail(response.data.email);
                    setIsAdmin(response.data.isAdmin);
                }
            } catch (error) {
                console.error("Error checking user session", error);
            }
        };
        checkUserSession();
    }, [isLoggedIn,userEmail]);

    const handleLogout = async () => {
        try {
            await axios.post(`${config.url}/user/logout`);
            setIsLoggedIn(false);
            setUserEmail("");
            setIsAdmin(false);
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${config.url}/user/login`, { email, password });
            if (response.data.success) {
                setIsLoggedIn(true);
                setUserEmail(response.data.email);
                setIsAdmin(response.data.isAdmin);
                setShowLoginModal(false);

                // Redirect to AdminHome if the user is an admin
                if (response.data.isAdmin) {
                    navigate("/AdminHome");
                }
            } else {
               navigate("/")
            }
        } catch (error) {
            console.error("Error logging in", error);
        }
    };

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: '70px', backgroundColor: 'black', boxShadow: '2px 1px 5px 5px rgba(0, 0, 0, 0.521)' }}>
                    <a className="navbar-brand d-flex align-items-center">
                        <img src={logo} height="100" className="mr-2" alt="Website Logo" style={{ marginLeft: '20px' }} />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>

                            <li className="nav-item">
                                <Link to="/ContactUs" className="nav-link" style={{ textDecoration: 'none' }}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/AboutUs" className="nav-link" style={{ textDecoration: 'none' }}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto" style={{ marginLeft: '900px' }}>
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <span className="nav-link" style={{ textDecoration: 'none' }}>
                                            Hello, {userEmail}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ textDecoration: 'none' }} onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="navbarDropdownMenuLink"
                                            role="button"
                                            onClick={() => setShowLoginModal(true)}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Register" className="nav-link" style={{ textDecoration: 'none' }}>
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="modal show" style={{
                    display: 'block',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    transition: 'background-color 0.3s ease-in-out'
                }}>
                    <div className="modal-dialog modal-dialog-centered" style={{
                        maxWidth: '450px',
                        margin: 'auto',
                        transition: 'transform 0.3s ease-in-out',
                        transform: 'scale(1)'
                    }}>
                        <div className="modal-content" style={{
                            borderRadius: '12px',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                            padding: '25px',
                            backgroundColor: '#fff',
                            transition: 'all 0.3s ease-in-out'
                        }}>
                            <div className="modal-header" style={{
                                borderBottom: 'none',
                                padding: '0',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <h5 className="modal-title" style={{
                                    fontSize: '26px',
                                    fontWeight: 'bold',
                                    color: '#444'
                                }}>Login</h5>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group" style={{ marginBottom: '20px' }}>
                                        <label htmlFor="email" style={{
                                            fontSize: '18px',
                                            marginBottom: '5px',
                                            color: '#666'
                                        }}>Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                height: '45px',
                                                fontSize: '16px',
                                                padding: '10px',
                                                borderColor: '#ccc',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" style={{
                                            fontSize: '18px',
                                            marginBottom: '5px',
                                            color: '#666'
                                        }}>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{
                                                height: '45px',
                                                fontSize: '16px',
                                                padding: '10px',
                                                borderColor: '#ccc',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    </div>
                                    <div className="modal-footer" style={{
                                        borderTop: 'none',
                                        padding: '0',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <a className="ml-3" href="/" style={{
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            color: '#337ab7'
                                        }}>Forgot Password?</a>
                                        <div>
                                            <button type="submit" className="btn btn-primary" style={{
                                                width: '110px',
                                                height: '45px',
                                                fontSize: '16px',
                                                padding: '0',
                                                marginRight: '10px',
                                                backgroundColor: '#337ab7',
                                                borderColor: '#337ab7',
                                                borderRadius: '5px',
                                                transition: 'background-color 0.3s ease'
                                            }}>Login</button>
                                            <button type="button" className="btn btn-danger" onClick={() => setShowLoginModal(false)} style={{
                                                width: '110px',
                                                height: '45px',
                                                fontSize: '16px',
                                                padding: '0',
                                                backgroundColor: '#d9534f',
                                                borderColor: '#d9534f',
                                                borderRadius: '5px',
                                                transition: 'background-color 0.3s ease'
                                            }}>Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
