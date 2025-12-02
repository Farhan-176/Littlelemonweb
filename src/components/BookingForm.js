/**
 * BookingForm Component
 * 
 * Comprehensive form for table reservations with:
 * - Real-time validation (HTML5 + React)
 * - Dynamic time slot updates based on selected date
 * - Loading states for better UX
 * - Accessibility features (ARIA attributes, proper labels)
 * - Error prevention and helpful error messages
 * 
 * @component
 * @param {Object} props
 * @param {Array<string>} props.availableTimes - Array of available time slots from API
 * @param {Function} props.dispatch - Redux-style dispatch for updating times
 * @param {Function} props.submitForm - Callback function to handle form submission
 * @returns {JSX.Element} Booking form with validation
 */

import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  /**
   * Form Field State
   * Controlled components pattern - all inputs managed by React state
   */
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  /**
   * Validation and UI State
   * - isFormValid: Tracks overall form validity (enables/disables submit button)
   * - isSubmitting: Prevents double submission and shows loading state
   * - isLoadingTimes: Shows loading state when fetching new time slots
   * - touched: Tracks which fields user has interacted with (prevents premature errors)
   */
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false
  });

  /**
   * Get today's date in YYYY-MM-DD format
   * Used for min attribute on date input to prevent past date selection
   * 
   * @returns {string} Today's date formatted as YYYY-MM-DD
   */
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /**
   * Get maximum bookable date (3 months from today)
   * Used for max attribute on date input to limit advance bookings
   * 
   * @returns {string} Date 3 months ahead formatted as YYYY-MM-DD
   */
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const year = maxDate.getFullYear();
    const month = String(maxDate.getMonth() + 1).padStart(2, '0');
    const day = String(maxDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /**
   * Real-time Form Validation
   * Runs whenever date, time, or guests changes
   * Validates all required fields and enables/disables submit button accordingly
   * 
   * Validation Rules:
   * - Date: Must be selected and not in the past
   * - Time: Must be selected from available options
   * - Guests: Must be between 1 and 10 (inclusive)
   */
  useEffect(() => {
    const validateForm = () => {
      const isDateValid = date !== '' && date >= getTodayDate();
      const isTimeValid = time !== '';
      const isGuestsValid = guests >= 1 && guests <= 10;
      
      // Form is only valid when ALL required fields are valid
      setIsFormValid(isDateValid && isTimeValid && isGuestsValid);
    };
    
    validateForm();
  }, [date, time, guests]);

  /**
   * Handle form submission
   * Prevents default form behavior, validates data, and calls parent submitForm
   * 
   * @param {Event} e - Form submit event
   * 
   * Error Prevention:
   * - Prevents submission if form is invalid
   * - Prevents double submission with isSubmitting flag
   * - Parses guests as integer before submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation check - double-check form is valid
    if (!isFormValid || isSubmitting) {
      return;
    }
    
    // Set submitting state to disable button and show loading text
    setIsSubmitting(true);
    
    // Prepare form data object for API submission
    const formData = {
      date,
      time,
      guests: parseInt(guests), // Convert string to number
      occasion // Optional field, can be empty string
    };
    
    try {
      // Call parent component's submit function
      // Parent handles API call and navigation to confirmation
      submitForm(formData);
    } catch (error) {
      // Log error for debugging (error handling is primarily in parent)
      console.error('Form submission error:', error);
      // Reset submitting state to allow retry
      setIsSubmitting(false);
    }
  };

  /**
   * Handle field blur event to mark field as "touched"
   * Used to prevent showing error messages until user has interacted with field
   * Improves UX by not showing errors on page load
   * 
   * @param {string} field - Name of the field that was blurred (date, time, guests)
   */
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="res-date">Choose date *</label>
        <input 
          type="date" 
          id="res-date"
          name="res-date"
          value={date}
          min={getTodayDate()}
          max={getMaxDate()}
          onChange={(e) => {
            const selectedDate = e.target.value;
            // Validate not in the past - set error state instead of alert
            if (selectedDate && selectedDate < getTodayDate()) {
              setTouched({ ...touched, date: true });
              return;
            }
            setDate(selectedDate);
            setIsLoadingTimes(true);
            dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
            // Reset loading state after dispatch
            setIsLoadingTimes(false);
          }}
          onBlur={() => handleBlur('date')}
          required
          aria-required="true"
          aria-invalid={touched.date && date === '' ? 'true' : 'false'}
          aria-describedby={touched.date && date === '' ? 'date-error' : 'date-hint'}
        />
        <small id="date-hint" className="field-hint">Select a date between today and {new Date(getMaxDate()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</small>
        {touched.date && date === '' && (
          <span id="date-error" className="error-message" role="alert">
            Please select a date for your reservation
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time (Central Time) *</label>
        <select 
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur('time')}
          required
          disabled={isLoadingTimes}
          aria-required="true"
          aria-invalid={touched.time && time === '' ? 'true' : 'false'}
          aria-describedby={touched.time && time === '' ? 'time-error' : 'time-hint'}
        >
          <option value="">{isLoadingTimes ? 'Loading available times...' : 'Select a time'}</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        <small id="time-hint" className="field-hint">Restaurant hours: 5:00 PM - 11:00 PM daily</small>
        {touched.time && time === '' && (
          <span id="time-error" className="error-message" role="alert">
            Please select a time for your reservation
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests *</label>
        <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => {
            const value = e.target.value;
            setGuests(value);
          }}
          onBlur={() => handleBlur('guests')}
          required
          aria-required="true"
          aria-invalid={touched.guests && (guests < 1 || guests > 10) ? 'true' : 'false'}
          aria-describedby="guests-hint"
        />
        {touched.guests && (guests < 1 || guests > 10) && (
          <span id="guests-error" className="error-message" role="alert">
            Party size must be between 1 and 10 guests
          </span>
        )}
        <small id="guests-hint" className="field-hint">Maximum 10 guests per online reservation. For larger parties, please call (312) 555-0123</small>
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-describedby="occasion-hint"
        >
          <option value="">Select an occasion (optional)</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Date Night">Date Night</option>
          <option value="Business Meeting">Business Meeting</option>
          <option value="Celebration">Celebration</option>
          <option value="Family Gathering">Family Gathering</option>
          <option value="Just Because">Just Because</option>
        </select>
        <small id="occasion-hint" className="field-hint">Optional - Helps us prepare special touches for your visit</small>
      </div>

      <button 
        type="submit" 
        className="submit-reservation-button"
        disabled={!isFormValid || isSubmitting}
        aria-disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting Your Reservation...' : 'Make Your Reservation'}
      </button>
      
      {!isFormValid && (date !== '' || time !== '' || touched.date || touched.time) && (
        <p className="form-validation-message" role="status">
          Please fill in all required fields correctly to submit your reservation.
        </p>
      )}
    </form>
  );
}

export default BookingForm;
