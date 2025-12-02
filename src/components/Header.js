import React from 'react';
import './Header.css';

function Header({ children }) {
  return (
    <header className="header" role="banner">
      {children}
    </header>
  );
}

export default Header;
