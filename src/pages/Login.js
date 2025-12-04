import React, { useState } from 'react';
import './Login.css';

/**
 * Login Page Component
 * 
 * Provides user authentication interface with:
 * - Login form for existing users
 * - Sign up form for new users
 * - Form validation
 * - Password visibility toggle
 * 
 * @component
 * @returns {JSX.Element} Login/Sign up page
 */
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      // Additional validation for sign up
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate successful submission
    setMessage(
      isLogin
        ? `Welcome back! Logged in as ${formData.email}`
        : `Account created successfully for ${formData.firstName} ${formData.lastName}`
    );

    // Reset form
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });

    // Clear message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setMessage('');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
  };

  return (
    <main role="main" aria-label="Login">
      <section className="login-section">
        <div className="login-container">
          <div className="login-box">
            <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="login-subtitle">
              {isLogin
                ? 'Sign in to your Little Lemon account'
                : 'Join us and enjoy exclusive benefits'}
            </p>

            {message && (
              <div className="success-message" role="status" aria-live="polite">
                ✓ {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="login-form" noValidate>
              {!isLogin && (
                <>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? 'error' : ''}
                      placeholder="John"
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                      aria-describedby={errors.firstName ? 'firstName-error' : ''}
                    />
                    {errors.firstName && (
                      <span className="error-message" id="firstName-error">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? 'error' : ''}
                      placeholder="Doe"
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                      aria-describedby={errors.lastName ? 'lastName-error' : ''}
                    />
                    {errors.lastName && (
                      <span className="error-message" id="lastName-error">{errors.lastName}</span>
                    )}
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : ''}
                />
                {errors.email && (
                  <span className="error-message" id="email-error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="Enter your password"
                    aria-invalid={errors.password ? 'true' : 'false'}
                    aria-describedby={errors.password ? 'password-error' : ''}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex={-1}
                  >
                    {showPassword ? '👁️‍🗨️' : '👁️'}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message" id="password-error">{errors.password}</span>
                )}
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    placeholder="Re-enter your password"
                    aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : ''}
                  />
                  {errors.confirmPassword && (
                    <span className="error-message" id="confirmPassword-error">{errors.confirmPassword}</span>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="forgot-password">
                  <a href="#forgot">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="login-button">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="form-divider">or</div>

            <div className="social-login">
              <button className="social-btn google-btn" title="Login with Google">
                <span>🔍</span> Google
              </button>
              <button className="social-btn facebook-btn" title="Login with Facebook">
                <span>f</span> Facebook
              </button>
            </div>

            <div className="form-toggle">
              <p>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="toggle-link"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>

          <div className="login-info">
            <div className="info-card">
              <h3>🔒 Secure</h3>
              <p>Your data is encrypted and protected with industry-standard security</p>
            </div>
            <div className="info-card">
              <h3>⚡ Fast</h3>
              <p>Quick access to your reservations and order history</p>
            </div>
            <div className="info-card">
              <h3>🎁 Rewards</h3>
              <p>Earn points on every reservation and order</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
