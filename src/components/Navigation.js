import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <img 
          src="/assets/Logo.svg" 
          alt="Little Lemon Logo" 
          className="logo"
          onClick={(e) => handleNavClick(e, 'home')}
          style={{ cursor: 'pointer' }}
        />
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={currentPage === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li>
            <a 
              href="#reservations" 
              onClick={(e) => handleNavClick(e, 'reservations')}
              className={currentPage === 'reservations' ? 'active' : ''}
            >
              Reservations
            </a>
          </li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
