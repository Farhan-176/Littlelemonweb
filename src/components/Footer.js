import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/">
            <img src="/assets/Logo.svg" alt="Little Lemon Logo" className="footer-logo" />
          </Link>
        </div>
        
        <nav className="footer-section" aria-label="Footer Navigation">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
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
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
