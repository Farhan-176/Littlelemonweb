import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    { id: 1, name: 'John Doe', rating: 5, review: 'Amazing food and great service! The Mediterranean dishes are authentic and delicious.' },
    { id: 2, name: 'Jane Smith', rating: 5, review: 'Best restaurant in Chicago! Love the cozy atmosphere and friendly staff.' },
    { id: 3, name: 'Mike Johnson', rating: 4, review: 'Excellent food quality. The lemon dessert is a must-try!' },
    { id: 4, name: 'Sarah Williams', rating: 5, review: 'Family-friendly environment with outstanding cuisine. Highly recommend!' }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What People Say About Us!</h2>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <div className="reviewer-info">
                <div className="profile-placeholder">
                  <div className="diagonal-line-1"></div>
                  <div className="diagonal-line-2"></div>
                </div>
                <h4>{review.name}</h4>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
