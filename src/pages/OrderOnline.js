import React, { useState } from 'react';
import './OrderOnline.css';

/**
 * Order Online Page Component
 * 
 * Allows customers to browse menu items and place orders for takeout or delivery.
 * Features:
 * - Browse items by category
 * - Add items to cart
 * - Cart management (add, remove, quantity)
 * - Checkout with delivery/pickup options
 * 
 * @component
 * @returns {JSX.Element} Order online interface
 */
function OrderOnline() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('mains');
  const [orderType, setOrderType] = useState('delivery');
  const [showCheckout, setShowCheckout] = useState(false);

  const menuItems = {
    mains: [
      { id: 1, name: 'Grilled Salmon', price: 24.99, category: 'mains' },
      { id: 2, name: 'Lamb Chops', price: 26.99, category: 'mains' },
      { id: 3, name: 'Pasta Carbonara', price: 16.99, category: 'mains' },
      { id: 4, name: 'Chicken Souvlaki', price: 18.99, category: 'mains' },
      { id: 5, name: 'Sea Bass', price: 28.99, category: 'mains' },
    ],
    appetizers: [
      { id: 6, name: 'Bruschetta', price: 8.99, category: 'appetizers' },
      { id: 7, name: 'Hummus', price: 7.99, category: 'appetizers' },
      { id: 8, name: 'Greek Salad', price: 9.99, category: 'appetizers' },
      { id: 9, name: 'Fried Calamari', price: 10.99, category: 'appetizers' },
    ],
    desserts: [
      { id: 10, name: 'Lemon Dessert', price: 6.99, category: 'desserts' },
      { id: 11, name: 'Baklava', price: 7.99, category: 'desserts' },
      { id: 12, name: 'Panna Cotta', price: 8.99, category: 'desserts' },
      { id: 13, name: 'Chocolate Mousse', price: 7.99, category: 'desserts' },
    ],
    beverages: [
      { id: 14, name: 'Lemonade', price: 4.99, category: 'beverages' },
      { id: 15, name: 'Italian Sodas', price: 5.99, category: 'beverages' },
      { id: 16, name: 'Greek Coffee', price: 4.99, category: 'beverages' },
      { id: 17, name: 'Wine', price: 15.00, category: 'beverages' },
    ]
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const delivery = orderType === 'delivery' ? 4.99 : 0;
  const total = subtotal + tax + delivery;

  const categoryItems = menuItems[selectedCategory] || [];

  return (
    <main role="main" aria-label="Order Online">
      <section className="order-section">
        <div className="order-container">
          <div className="order-header">
            <h1>Order Online</h1>
            <p className="order-subtitle">Browse our menu and place your order for delivery or pickup</p>
          </div>

          <div className="order-content">
            <div className="order-left">
              <div className="order-type-selector">
                <h3>Order Type</h3>
                <div className="order-type-buttons">
                  <button
                    className={`type-btn ${orderType === 'delivery' ? 'active' : ''}`}
                    onClick={() => setOrderType('delivery')}
                  >
                    🚗 Delivery
                  </button>
                  <button
                    className={`type-btn ${orderType === 'pickup' ? 'active' : ''}`}
                    onClick={() => setOrderType('pickup')}
                  >
                    🏪 Pickup
                  </button>
                </div>
              </div>

              <div className="category-filter">
                <h3>Categories</h3>
                <div className="category-buttons">
                  {Object.keys(menuItems).map(category => (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="items-display">
                <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h3>
                <div className="items-grid">
                  {categoryItems.map(item => (
                    <div key={item.id} className="order-item">
                      <h4>{item.name}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="add-to-cart-btn"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-right">
              <div className="cart-section">
                <h2>Your Order</h2>
                {cart.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>${item.price.toFixed(2)} each</p>
                          </div>
                          <div className="item-controls">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label={`Decrease ${item.name} quantity`}
                              className="qty-btn"
                            >
                              −
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label={`Increase ${item.name} quantity`}
                              className="qty-btn"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="remove-btn"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              ✕
                            </button>
                          </div>
                          <div className="item-total">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-summary">
                      <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Tax (8%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="summary-row">
                          <span>Delivery:</span>
                          <span>${delivery.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowCheckout(true)}
                      className="checkout-btn"
                    >
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {showCheckout && (
            <div className="checkout-modal" role="dialog" aria-modal="true">
              <div className="checkout-content">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="close-btn"
                  aria-label="Close checkout"
                >
                  ✕
                </button>
                <h2>Checkout</h2>
                <form className="checkout-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" required />
                  </div>
                  {orderType === 'delivery' && (
                    <>
                      <div className="form-group">
                        <label htmlFor="address">Delivery Address *</label>
                        <input type="text" id="address" required />
                      </div>
                    </>
                  )}
                  <div className="form-group">
                    <label htmlFor="instructions">Special Instructions</label>
                    <textarea id="instructions" rows="3"></textarea>
                  </div>
                  <div className="order-total">
                    <h3>Order Total: ${total.toFixed(2)}</h3>
                  </div>
                  <button type="submit" className="place-order-btn">
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default OrderOnline;
