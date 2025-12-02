import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-label="Hero Banner">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" aria-label="Reserve a table at Little Lemon">
            <button className="reserve-button" aria-label="Reserve a Table - On Click">Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/restauranfood.jpg" alt="Delicious Mediterranean food served at Little Lemon restaurant" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
