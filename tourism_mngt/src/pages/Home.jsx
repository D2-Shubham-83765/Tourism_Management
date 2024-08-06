import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import logo from '../Images/Samplelogo.png';
import './home.css';
import CityCards from "../components/CityCards";

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '70px' }}>
          <a className="navbar-brand d-flex align-items-center">
            <img src={logo} height="100" className="mr-2" alt="Website Logo" />
            Travelago
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </a>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item text-white" href="#">Action</a>
                  <a className="dropdown-item text-white" href="#">Another action</a>
                  <a className="dropdown-item text-white" href="#">Something else here</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link to="/Register" className="nav-link dropdown-toggle" id="loginSignupDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ textDecoration: 'none' }}>
                  Signup
                </Link>
                <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="loginSignupDropdown">
                  <a className="dropdown-item text-white">Login</a>
                  <a className="dropdown-item text-white">Signup</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container"
        style={{
          height: "650px",
          backgroundImage: 'url("https://wallpaper.dog/large/10732936.jpg")',
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%"
        }}>

        {/* Anim Text */}
        <div className="container22" >
          <span className="mytext1">Welcome to Travelago </span>
          <div className="hidden visible">
            <span className="mytext2"> Enjoy Hassle Free Holiday </span>
          </div>
        </div>

        <div className="additional-text">
          <span className="left-text" >24*7 Service</span>
          <span className="right-text" >4.5 Star Customer Rating</span>
        </div>
      </main>

      <CityCards />

      {/* Footer */}
      <footer className="bg-dark text-white text-center text-lg-start" style={{ paddingTop: '20px' }}>
  <div className="container p-4" style={{ maxWidth: '1100px' }}>
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase" style={{ fontWeight: 'bold', marginBottom: '15px' }}>About Us</h5>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>
          At Travelago, we are passionate about creating unforgettable travel experiences. With a commitment to excellence and a deep understanding of our customers’ needs, we strive to be your trusted partner in exploring the world. Whether you’re dreaming of a luxurious getaway, an adventurous expedition, or a culturally enriching journey, we are here to turn your travel aspirations into reality.
        </p>
      </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase" style={{ fontWeight: 'bold', marginBottom: '15px' }}>Contact Us</h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-2">
            <a href="mailto:contact@yourwebsite.com" className="text-white" style={{ textDecoration: 'none', color: '#bbb' }}>
              Email: contact@yourwebsite.com
            </a>
          </li>
          <li className="mb-2">
            <a href="tel:+1234567890" className="text-white" style={{ textDecoration: 'none', color: '#bbb' }}>
              Phone: +123 456 7890
            </a>
          </li>
          <li>
            <a href="https://maps.google.com/?q=123+Street,+City,+Country" target="_blank" rel="noopener noreferrer" className="text-white" style={{ textDecoration: 'none', color: '#bbb' }}>
              Address: 123 Street, City, Country
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center p-3" style={{ backgroundColor: '#111', borderTop: '1px solid #444' }}>
    © 2024 Travelago.com
  </div>
</footer>


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
              <form>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{
                    fontSize: '18px',
                    marginBottom: '5px',
                    color: '#666'
                  }}>Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" style={{
                    height: '45px',
                    fontSize: '16px',
                    padding: '10px',
                    borderColor: '#ccc',
                    borderRadius: '5px'
                  }} />
                </div>
                <div className="form-group">
                  <label htmlFor="password" style={{
                    fontSize: '18px',
                    marginBottom: '5px',
                    color: '#666'
                  }}>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" style={{
                    height: '45px',
                    fontSize: '16px',
                    padding: '10px',
                    borderColor: '#ccc',
                    borderRadius: '5px'
                  }} />
                </div>
              </form>
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
          </div>
        </div>
      </div>
      

      )}
    </div>
  );
};

export default Home;
