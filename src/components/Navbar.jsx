import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Images/footer.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`nav ${isMobile ? "mobile-open" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Rhyno EV Logo" className="logo" />
      </Link>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`menu-items ${isMobile ? "nav-mobile" : ""}`}>
        <div className="close-btn" onClick={toggleMobileMenu}>
          &times;
        </div>
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>
          About Us
        </Link>
        <div className="nav-link">
          Products
          <div className="dropdown">
            <Link to="/product1" onClick={toggleMobileMenu}>
            SE03 Lite
            </Link>
            <Link to="/product2" onClick={toggleMobileMenu}>
            SE03
            </Link>
            <Link to="/product3" onClick={toggleMobileMenu}>
            SE03 Max
            </Link>
            <Link to="/compare" onClick={toggleMobileMenu}>
              Compare All
            </Link>
          </div>
        </div>
        <Link to="/contact" className="nav-link" onClick={toggleMobileMenu}>
          Contact Us
        </Link>
        <Link to="/prebook" className="nav-link" onClick={toggleMobileMenu}>
          Pre-book Now
        </Link>
      </div>

      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
