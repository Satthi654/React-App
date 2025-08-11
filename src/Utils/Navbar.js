import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`navbar${mobileMenuOpen ? ' mobile-open' : ''}`}>  
      <div className="navbar-logo">
        <span>Sathish <span className="highlight">Software Solution</span> Pvt Ltd</span>
      </div>
      <div className={`navbar-links${mobileMenuOpen ? ' open' : ''}`}>  
        <a href="#home">Home</a>
        <div 
          className="navbar-dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="navbar-link" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Services <span className="arrow">▼</span>
          </span>
          <div className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>  
            <a href="#web">Web Development</a>
            <a href="#android">Android Apps</a>
            <a href="#consulting">Consulting</a>
          </div>
        </div>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar; 