import React from 'react';
import './About.css';

/**
 * About Page Component
 * 
 * Displays information about Little Lemon restaurant including:
 * - Restaurant history and mission
 * - Team members with photos
 * - Restaurant values and specialties
 * 
 * @component
 * @returns {JSX.Element} About page with restaurant information
 */
function About() {
  return (
    <main role="main" aria-label="About Little Lemon">
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1>About Little Lemon</h1>
            <p className="about-intro">
              Welcome to Little Lemon, where Mediterranean flavors meet modern dining. 
              Since 2023, we've been serving our community with authentic, fresh, and delicious cuisine.
            </p>

            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                At Little Lemon, our mission is to provide an exceptional dining experience 
                by combining traditional Mediterranean recipes with contemporary techniques. 
                We believe in using only the finest ingredients, supporting local suppliers, 
                and creating memorable moments for our guests.
              </p>
            </div>

            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Founded by two passionate chefs with over 30 years of combined experience 
                in Mediterranean cuisine, Little Lemon began as a dream to bring authentic 
                tastes to our community. What started as a small kitchen has grown into a 
                beloved neighborhood restaurant that draws food enthusiasts from all around.
              </p>
              <p>
                Every dish we serve tells a story of tradition, innovation, and love for food. 
                From our signature lemon-inspired recipes to our carefully curated wine selection, 
                every element of your dining experience is thoughtfully crafted.
              </p>
            </div>

            <div className="about-team">
              <h2>Our Team</h2>
              <div className="team-grid">
                <div className="team-member">
                  <img 
                    src="/assets/Mario.jpg" 
                    alt="Mario - Executive Chef" 
                    className="team-photo"
                  />
                  <h3>Mario</h3>
                  <p className="team-role">Executive Chef</p>
                  <p className="team-bio">
                    With 25 years of culinary experience, Mario leads our kitchen with passion 
                    and precision, ensuring every dish meets our high standards.
                  </p>
                </div>
                <div className="team-member">
                  <img 
                    src="/assets/Adrian.jpg" 
                    alt="Adrian - Head Chef" 
                    className="team-photo"
                  />
                  <h3>Adrian</h3>
                  <p className="team-role">Head Chef</p>
                  <p className="team-bio">
                    Adrian brings innovation to our menu while honoring Mediterranean traditions, 
                    creating dishes that delight and inspire.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-values">
              <h2>What Sets Us Apart</h2>
              <ul className="values-list">
                <li><strong>Fresh Ingredients:</strong> We source the freshest ingredients daily from local suppliers</li>
                <li><strong>Authentic Recipes:</strong> Traditional Mediterranean flavors prepared with modern techniques</li>
                <li><strong>Quality Service:</strong> Our team is dedicated to providing warm, attentive service</li>
                <li><strong>Sustainable Practices:</strong> We're committed to environmental responsibility</li>
                <li><strong>Community Focus:</strong> Supporting local farmers and suppliers whenever possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
