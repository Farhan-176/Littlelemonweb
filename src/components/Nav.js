import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-container">
        <Link to="/" aria-label="Home - Little Lemon Logo">
          <img 
            src="/assets/Logo.svg" 
            alt="Little Lemon Logo" 
            className="logo"
          />
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div 
            className="nav-overlay" 
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} role="menubar">
          <li role="none">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Home page"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to About page"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/menu"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Menu page"
              onClick={closeMenu}
            >
              Menu
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/booking"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Reservations page"
              onClick={closeMenu}
            >
              Reservations
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/order-online"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Order Online page"
              onClick={closeMenu}
            >
              Order Online
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/login"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Login page"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
