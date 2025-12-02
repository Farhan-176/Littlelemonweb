/**
 * Main Component
 * 
 * Central routing component that manages the application's navigation and booking state.
 * Uses useReducer for state management and React Router for client-side routing.
 * 
 * @component
 * @returns {JSX.Element} Main content area with routes
 */

import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';

/**
 * Initialize available times using the external API
 * Called once when component mounts to populate initial time slots
 * 
 * @returns {Array<string>} Array of available time slots (e.g., ["17:00", "18:00"])
 */
const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

/**
 * Reducer function to update available times based on selected date
 * Integrates with external API to fetch dynamic time slots
 * 
 * @param {Array<string>} state - Current available times array
 * @param {Object} action - Action object with type and payload
 * @param {string} action.type - Action type ('UPDATE_TIMES')
 * @param {string} action.date - Selected date in YYYY-MM-DD format
 * @returns {Array<string>} Updated array of available time slots
 */
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Fetch available times from API based on selected date
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function Main() {
  /**
   * State Management
   * useReducer manages available time slots with the updateTimes reducer
   * Initial state is populated by initializeTimes() function
   */
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  // Hook for programmatic navigation after successful booking
  const navigate = useNavigate();

  /**
   * Submit form data to the external API and navigate to confirmation
   * 
   * @param {Object} formData - Booking form data
   * @param {string} formData.date - Reservation date (YYYY-MM-DD)
   * @param {string} formData.time - Reservation time (HH:MM)
   * @param {number} formData.guests - Number of guests (1-10)
   * @param {string} formData.occasion - Optional occasion type
   * 
   * Error Handling:
   * - Displays user-friendly messages if API fails
   * - Provides phone number as fallback contact method
   * - Logs errors to console for debugging
   */
  const submitForm = (formData) => {
    try {
      // Call external API to submit booking
      const isSubmitted = window.submitAPI(formData);
      
      if (isSubmitted) {
        // Generate unique confirmation number using timestamp
        // Format: LL + last 8 digits of timestamp (e.g., "LL12345678")
        const confirmationNumber = `LL${Date.now().toString().slice(-8)}`;
        
        // Navigate to confirmation page with booking details via router state
        // This allows ConfirmedBooking component to display the reservation summary
        navigate('/confirmed', { 
          state: { 
            bookingDetails: formData,
            confirmationNumber 
          } 
        });
      } else {
        // API returned false - booking was not accepted
        alert('Unable to confirm your reservation. Please try again or call us at (312) 555-0123.');
      }
    } catch (error) {
      // Network error or API unavailable
      console.error('Booking submission error:', error);
      alert('An error occurred while submitting your reservation. Please try again or call us at (312) 555-0123.');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch}
              submitForm={submitForm} 
            />
          } 
        />
        <Route 
          path="/reservations" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch}
              submitForm={submitForm} 
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
export { initializeTimes, updateTimes };
