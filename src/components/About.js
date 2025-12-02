import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className="text-placeholder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="about-images">
          <img src="/assets/Mario and Adrian A.jpg" alt="Mario and Adrian" className="about-image-large" />
          <img src="/assets/Mario and Adrian b.jpg" alt="Restaurant chefs" className="about-image-small" />
        </div>
      </div>
    </section>
  );
}

export default About;
