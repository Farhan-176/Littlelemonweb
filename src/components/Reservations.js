import React, { useState } from 'react';
import OccasionDropdown from './OccasionDropdown';
import './Reservations.css';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const handleOccasionChange = (occasion) => {
    setFormData({
      ...formData,
      occasion: occasion
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert(`Reservation confirmed for ${formData.name}! ${formData.occasion ? `We'll prepare something special for your ${formData.occasion}!` : ''}`);
  };

  return (
    <section className="reservations">
      <div className="reservations-container">
        <div className="reservations-header">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon and experience authentic Mediterranean cuisine</p>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8+ Guests</option>
              </select>
            </div>
          </div>

          <div className="form-group-full">
            <label>Select Occasion</label>
            <p className="occasion-hint">
              Let us know if you're celebrating something special, and we'll help make it memorable!
            </p>
            <OccasionDropdown 
              value={formData.occasion}
              onChange={handleOccasionChange}
            />
          </div>

          <div className="form-group-full">
            <label htmlFor="notes">Special Requests (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Any dietary restrictions or special requests..."
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservations;
