import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
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
        <ul className="nav-links" role="menubar">
          <li role="none">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Home page"
            >
              Home
            </NavLink>
          </li>
          <li role="none"><a href="#about" role="menuitem" aria-label="Navigate to About section">About</a></li>
          <li role="none"><a href="#menu" role="menuitem" aria-label="Navigate to Menu section">Menu</a></li>
          <li role="none">
            <NavLink 
              to="/booking"
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              aria-label="Navigate to Reservations page"
            >
              Reservations
            </NavLink>
          </li>
          <li role="none"><a href="#order" role="menuitem" aria-label="Navigate to Order Online section">Order Online</a></li>
          <li role="none"><a href="#login" role="menuitem" aria-label="Navigate to Login page">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
