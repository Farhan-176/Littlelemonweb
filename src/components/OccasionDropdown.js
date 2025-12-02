import React, { useState, useRef, useEffect } from 'react';
import './OccasionDropdown.css';

function OccasionDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const occasions = ['Birthday', 'Engagement', 'Anniversary'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (occasion) => {
    onChange(occasion);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="occasion-dropdown" ref={dropdownRef}>
      <button
        className={`dropdown-button ${value ? 'selected' : ''} ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        type="button"
      >
        <span className="dropdown-icon">🎉</span>
        <span className="dropdown-text">{value || 'Occasion'}</span>
        <span className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {occasions.map((occasion) => (
            <button
              key={occasion}
              className="dropdown-item"
              onClick={() => handleSelect(occasion)}
              type="button"
            >
              {occasion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default OccasionDropdown;
