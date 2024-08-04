import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import vrindavan from '../Images/vrindavan.png';
import jungle_travel from '../Images/jungle travel.jpg';
import couple from '../Images/couple.jpeg.jpg';
import logo from '../Images/Samplelogo.png';
import beach from '../Images/beach-jumping.webp'
import honeymoon from '../Images/Honeymoon.jpg'
import './home.css';

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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
                  <a className="dropdown-item text-white" href="#">Signup</a>
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

      {/* Card List */}
      <div className="card-group card-group-scroll">

        <div className="card">
          <img src={vrindavan} className="card-img-top" alt="Hollywood Sign on The Hill" />
          <div className="card-body">
            <h5 className="card-title"> <b>Pilgrimage</b></h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>

        <div className="card" >
          <img src={beach} className="card-img-top" alt="Palm Springs Road" />
          <div className="card-body">
            <h5 className="card-title"> <b>Beaches</b> </h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>

        <Link to="/City" className="card">
          <div>
            <img src={jungle_travel} className="card-img-top" alt="Los Angeles Skyscrapers" />
            <div className="card-body">
              <h5 className="card-title"> <b>Adventure</b> </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </Link>

        <div className="card">
          <img src={honeymoon} className="card-img-top" alt="Hollywood Sign on The Hill" />
          <div className="card-body">
            <h5 className="card-title"> <b>Honeymoon</b> </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.webp" className="card-img-top" alt="Palm Springs Road" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>At Travelago, we are passionate about creating unforgettable travel experiences. With a commitment to excellence and a deep understanding of our customers’ needs, we strive to be your trusted partner in exploring the world. Whether you’re dreaming of a luxurious getaway, an adventurous expedition, or a culturally enriching journey, we are here to turn your travel aspirations into reality.</p>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Email: contact@yourwebsite.com</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Phone: +123 456 7890</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Address: 123 Street, City, Country</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark">
          © 2024 Travelago.com
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                {/* <button type="button" className="close" onClick={() => setShowLoginModal(false)}>
                  <span>&times;</span>
                </button> */}
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">Login</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => setShowLoginModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
