import React from 'react';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-label="Table Reservation">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon and experience authentic Mediterranean cuisine in the heart of Chicago.</p>
          <p className="restaurant-hours"><strong>Open Daily:</strong> 5:00 PM - 11:00 PM (Central Time)</p>
        </div>
        
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        
        <div className="booking-footer" aria-label="Additional reservation information">
          <p>For parties larger than 10 guests, please call us at <strong>(312) 555-0123</strong></p>
          <p>Reservations are held for 15 minutes past the booking time.</p>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
