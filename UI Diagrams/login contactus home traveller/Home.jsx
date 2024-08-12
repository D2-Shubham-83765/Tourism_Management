import React from 'react';


const Home = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="Samplelogo.png" height="40" className="mr-2" alt="Website Logo" />
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
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item text-white" href="#">Action</a>
                  <a className="dropdown-item text-white" href="#">Another action</a>
                  <a className="dropdown-item text-white" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="loginSignupDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login / Signup
                </a>
                <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="loginSignupDropdown">
                  <a className="dropdown-item text-white" href="#">Login</a>
                  <a className="dropdown-item text-white" href="#">Signup</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mt-5" style={{ height: '570px' }}>
        <div className="card-deck">
          <div className="card">
            <img src="vrindavan.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pilgrimage</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src="couple.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Beaches</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src="jungle travel.jpg" className="card-img-top" alt="..." />
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
              <p>Your website description here. You can write about the purpose of your website, its history, and any other relevant information.</p>
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
          © 2024 Your Website Name
        </div>
      </footer>
    </div>
  );
};

export default Home;
