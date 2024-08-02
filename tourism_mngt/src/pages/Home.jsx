import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import vrindavan from '../Images/vrindavan.png'
import jungle_travel from '../Images/jungle travel.jpg'
import couple from '../Images/couple.jpeg.jpg'
import logo from '../Images/Samplelogo.png'


const Home = () => {
  return (
    <div>
      <style>
        {`
          .card{
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            margin-bottom: 30px;
            width: 18rem; /* Set a fixed width for smaller cards */
          }
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .card-deck {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .footer {
            padding: 30px 0;
          }
          .footer h5 {
            font-weight: bold;
          }
          .footer a {
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          .navbar-brand img {
            max-height: 40px;
          }
          .nav-item .nav-link {
            color: white !important;
          }
          .dropdown-menu {
            background-color: #343a40;
          }
          .dropdown-item {
            color: white !important;
          }
          .dropdown-item:hover {
            background-color: #495057;
          }
        `}
      </style>

      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center">
            <img src={logo} height="70" className="mr-2" alt="Website Logo" />
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
              <Link to="/ContactUs">
              
              <li className="nav-item">
                <a className="nav-link" >Contact Us</a>
              </li>
                </Link>
                <Link to="/AboutUs">
                
              <li className="nav-item">
                <a className="nav-link" >About Us</a>
              </li>
                </Link>
              <li className="nav-item dropdown">
                <Link to="/Login">
                
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >
                 Login
                </a>
                  </Link>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item text-white" href="#">Action</a>
                  <a className="dropdown-item text-white" href="#">Another action</a>
                  <a className="dropdown-item text-white" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="/Register">
                <a
                  className="nav-link dropdown-toggle"
                  id="loginSignupDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                Signup
                </a>
                </Link>
                <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="loginSignupDropdown">
                  
                  
                  <a className="dropdown-item text-white" >Login</a>
                  <a className="dropdown-item text-white" href="#">Signup</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

     {/* Main Content */}
     <main className="container mt-5">
        <div className="card-deck">
          <div className="card">
            <img src={vrindavan} className="card-img-top img-fluid" alt="Pilgrimage" />
            <div className="card-body">
              <h5 className="card-title">Pilgrimage</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          {/* <Link to="/City"> */}
          <Link  to="/City" className="card">
            <img src={couple} className="card-img-top img-fluid" alt="Beaches" />
            <div className="card-body">
              <h5 className="card-title">Beaches</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          {/* </div> */}
          </Link>
          <div className="card">
            <img src={jungle_travel} className="card-img-top img-fluid" alt="Adventurous" />
            <div className="card-body">
              <h5 className="card-title">Adventurous</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p>At Travelago, we are passionate about creating unforgettable travel experiences. With a commitment to
              excellence and a deep understanding of our customers’ needs, we strive to be your trusted partner in
              exploring the world. Whether you’re dreaming of a luxurious getaway, an adventurous expedition, or a
              culturally enriching journey, we are here to turn your travel aspirations into reality.</p>
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
          </div>
  );
};

export default Home
