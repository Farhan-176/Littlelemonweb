import React from 'react';
import './Highlights.css';

function Highlights() {
  const specials = [
    { 
      id: 1, 
      name: 'Greek Salad', 
      price: '$12.99', 
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/assets/greek salad.jpg'
    },
    { 
      id: 2, 
      name: 'Bruschetta', 
      price: '$5.99', 
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/assets/bruchetta.svg'
    },
    { 
      id: 3, 
      name: 'Lemon Dessert', 
      price: '$5.00', 
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: '/assets/lemon dessert.jpg'
    }
  ];

  return (
    <section className="highlights">
      <div className="highlights-container">
        <div className="highlights-header">
          <h2>This weeks specials!</h2>
          <button className="online-menu-button">Online Menu</button>
        </div>
        <div className="specials-grid">
          {specials.map(special => (
            <div key={special.id} className="special-card">
              <img src={special.image} alt={special.name} className="special-image" />
              <div className="special-content">
                <div className="special-header">
                  <h3>{special.name}</h3>
                  <span className="price">{special.price}</span>
                </div>
                <p className="special-description">{special.description}</p>
                <a href="#order" className="order-link">
                  Order a delivery 🚴
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
