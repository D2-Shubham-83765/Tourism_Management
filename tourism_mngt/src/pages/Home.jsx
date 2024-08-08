import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './home.css';
import CityCards from "../components/CityCards";
import Navbar from "../components/Navbar";

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      
      <Navbar />

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
          <span className="mytext1">Welcome to Shubhyatra </span>
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

    </div>
  );
};

export default Home;
