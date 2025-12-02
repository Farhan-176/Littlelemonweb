/**
 * ConfirmedBooking Component
 * 
 * Displays booking confirmation with complete reservation details.
 * Receives booking data via React Router location state from Main component.
 * 
 * Features:
 * - Shows unique confirmation number for reference
 * - Displays formatted reservation details (date, time, guests, occasion)
 * - Provides action buttons to return home or make another booking
 * - Includes contact information for modifications
 * 
 * @component
 * @returns {JSX.Element} Confirmation page with booking summary
 */

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  // Access router location state passed from Main component after successful booking
  const location = useLocation();
  
  /**
   * Extract booking details from location state
   * Uses optional chaining to handle case where user navigates directly to /confirmed
   * (without going through booking flow)
   */
  const { bookingDetails, confirmationNumber } = location.state || {};

  /**
   * Format date string for human-readable display
   * Converts YYYY-MM-DD to "Monday, December 25, 2025" format
   * 
   * @param {string} dateString - Date in YYYY-MM-DD format
   * @returns {string} Formatted date string or 'N/A' if invalid
   * 
   * Note: Adds 'T00:00:00' to prevent timezone-related date shifts
   */
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    // Add time component to ensure correct date interpretation
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="confirmed-booking" role="main" aria-label="Booking Confirmation">
      <div className="confirmation-container">
        <div className="confirmation-icon" role="img" aria-label="Success checkmark">✓</div>
        <h1>Booking Confirmed!</h1>
        
        {confirmationNumber && (
          <div className="confirmation-number">
            <strong>Confirmation Number:</strong> {confirmationNumber}
          </div>
        )}
        
        {bookingDetails ? (
          <div className="booking-summary">
            <h2>Reservation Details</h2>
            <div className="detail-row">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{formatDate(bookingDetails.date)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{bookingDetails.time} (Central Time)</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Number of Guests:</span>
              <span className="detail-value">{bookingDetails.guests}</span>
            </div>
            {bookingDetails.occasion && (
              <div className="detail-row">
                <span className="detail-label">Occasion:</span>
                <span className="detail-value">{bookingDetails.occasion}</span>
              </div>
            )}
          </div>
        ) : (
          <p>Your table reservation has been successfully confirmed.</p>
        )}
        
        <p className="confirmation-message">We look forward to serving you at Little Lemon!</p>
        <p>You will receive a confirmation email shortly with your reservation details.</p>
        
        <div className="confirmation-actions">
          <Link to="/" className="btn-home">Back to Home</Link>
          <Link to="/booking" className="btn-new-booking">Make Another Reservation</Link>
        </div>
        
        <div className="contact-info">
          <p><strong>Need to modify your reservation?</strong></p>
          <p>Please call us at <a href="tel:+13125550123">(312) 555-0123</a></p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
