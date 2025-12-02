import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/assets/Logo.svg" alt="Little Lemon Logo" className="footer-logo" />
        </div>
        
        <nav className="footer-section" aria-label="Footer Navigation">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
        
        <address className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Main St, Chicago, IL</li>
            <li><a href="tel:+11234567890">Phone: (123) 456-7890</a></li>
            <li><a href="mailto:info@littlelemon.com">Email: info@littlelemon.com</a></li>
          </ul>
        </address>
        
        <nav className="footer-section" aria-label="Social Media">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
