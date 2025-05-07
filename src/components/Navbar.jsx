// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/navbar.css';


const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Loan Calculator</div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchange"  >
              Exchange Rates
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <button onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
