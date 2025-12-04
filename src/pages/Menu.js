import React, { useState } from 'react';
import './Menu.css';

/**
 * Menu Page Component
 * 
 * Displays complete restaurant menu organized by categories:
 * - Appetizers
 * - Main Courses
 * - Desserts
 * - Beverages
 * 
 * Features filtering by category and item details with prices
 * 
 * @component
 * @returns {JSX.Element} Menu page with organized dishes
 */
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  const menuItems = {
    appetizers: [
      {
        id: 1,
        name: 'Bruschetta with Tomato',
        price: '$8.99',
        description: 'Toasted bread topped with fresh tomatoes, garlic, and basil',
        icon: '🍅'
      },
      {
        id: 2,
        name: 'Hummus',
        price: '$7.99',
        description: 'Creamy chickpea dip with tahini, lemon, and olive oil',
        icon: '🥜'
      },
      {
        id: 3,
        name: 'Greek Salad',
        price: '$9.99',
        description: 'Fresh vegetables with feta cheese and olives',
        icon: '🥗'
      },
      {
        id: 4,
        name: 'Fried Calamari',
        price: '$10.99',
        description: 'Tender squid rings, lightly fried and served with lemon',
        icon: '🦑'
      },
    ],
    mains: [
      {
        id: 5,
        name: 'Grilled Salmon',
        price: '$24.99',
        description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
        icon: '🐟'
      },
      {
        id: 6,
        name: 'Lamb Chops',
        price: '$26.99',
        description: 'Mediterranean-style lamb chops with garlic and rosemary',
        icon: '🍖'
      },
      {
        id: 7,
        name: 'Pasta Carbonara',
        price: '$16.99',
        description: 'Classic Italian pasta with bacon, egg, and Pecorino cheese',
        icon: '🍝'
      },
      {
        id: 8,
        name: 'Chicken Souvlaki',
        price: '$18.99',
        description: 'Grilled chicken skewers with tzatziki sauce and pita bread',
        icon: '🍗'
      },
      {
        id: 9,
        name: 'Sea Bass',
        price: '$28.99',
        description: 'Whole grilled sea bass with lemon and herbs',
        icon: '🐠'
      },
    ],
    desserts: [
      {
        id: 10,
        name: 'Lemon Dessert',
        price: '$6.99',
        description: 'Our signature lemon dessert with light cream and citrus notes',
        icon: '🍰'
      },
      {
        id: 11,
        name: 'Baklava',
        price: '$7.99',
        description: 'Crispy phyllo pastry with honey, nuts, and spices',
        icon: '🥐'
      },
      {
        id: 12,
        name: 'Panna Cotta',
        price: '$8.99',
        description: 'Creamy Italian custard with berry compote',
        icon: '🍮'
      },
      {
        id: 13,
        name: 'Chocolate Mousse',
        price: '$7.99',
        description: 'Rich dark chocolate mousse with fresh whipped cream',
        icon: '🍫'
      },
    ],
    beverages: [
      {
        id: 14,
        name: 'Lemonade',
        price: '$4.99',
        description: 'Fresh homemade lemonade with fresh mint',
        icon: '🍋'
      },
      {
        id: 15,
        name: 'Italian Sodas',
        price: '$5.99',
        description: 'Flavored sodas with Italian syrups and sparkling water',
        icon: '🥤'
      },
      {
        id: 16,
        name: 'Greek Coffee',
        price: '$4.99',
        description: 'Traditional Greek coffee served strong and flavorful',
        icon: '☕'
      },
      {
        id: 17,
        name: 'Wine Selection',
        price: '$12-$45',
        description: 'Carefully curated wines from Mediterranean regions',
        icon: '🍷'
      },
      {
        id: 18,
        name: 'Ouzo',
        price: '$8.99',
        description: 'Traditional Greek anise-flavored spirit',
        icon: '🥃'
      },
    ]
  };

  const categories = [
    { key: 'appetizers', label: 'Appetizers' },
    { key: 'mains', label: 'Main Courses' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'beverages', label: 'Beverages' }
  ];

  return (
    <main role="main" aria-label="Little Lemon Menu">
      <section className="menu-section">
        <div className="menu-container">
          <div className="menu-header">
            <h1>Our Menu</h1>
            <p className="menu-subtitle">Authentic Mediterranean cuisine prepared with fresh, quality ingredients</p>
          </div>

          <div className="menu-categories" role="tablist" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category.key}
                role="tab"
                aria-selected={selectedCategory === category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`category-button ${selectedCategory === category.key ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="menu-items-grid" role="tabpanel">
            {menuItems[selectedCategory].map((item) => (
              <div key={item.id} className="menu-item">
                <div className="item-icon">{item.icon}</div>
                <h3>{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="menu-note">
            <p>
              <strong>Note:</strong> We offer customization for dietary preferences and allergies. 
              Please inform our staff about any special requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;
