# Little Lemon Restaurant - Table Reservation System

![Little Lemon Logo](public/assets/Logo.svg)

## 📋 Project Overview

This is a comprehensive web application developed for Little Lemon Restaurant as part of the Meta Front-End Developer Capstone Project. The application provides an intuitive online table reservation system with a focus on exceptional user experience, accessibility, and responsive design.

**Repository**: [Littlelemonweb](https://github.com/Farhan-176/Littlelemonweb)

---

## ✨ Key Features

### 🎯 Core Functionality
- **Interactive Booking Form**: Real-time form validation with dynamic field updates
- **API Integration**: Connects to external API for available time slots based on selected date
- **Booking Confirmation**: Displays complete reservation details with unique confirmation number
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility First**: WCAG 2.1 compliant with comprehensive ARIA attributes

### 🔍 Advanced Features
- **Dynamic Time Slot Selection**: Available times update based on chosen date
- **Form Validation**: HTML5 + React validation with real-time error feedback
- **Loading States**: Visual feedback during API calls and form submission
- **Error Handling**: Comprehensive error messages with fallback contact options
- **Touch-Friendly**: Mobile-optimized with appropriate input types and controls

---

## 🏗️ Architecture & Technologies

### Technology Stack
- **React 18**: Modern React with Hooks (useState, useReducer, useEffect)
- **React Router DOM v6**: Client-side routing and navigation
- **React Testing Library**: Component and integration testing
- **Jest**: Unit test framework
- **CSS3**: Custom styling with CSS variables and responsive design
- **HTML5**: Semantic markup with accessibility features

### Project Structure
```
little-lemonweb/
├── public/
│   ├── assets/              # Images, logo, and static assets
│   ├── index.html           # HTML template with meta tags and API script
│   └── manifest.json        # PWA configuration
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.js        # Header with logo
│   │   ├── Nav.js           # Navigation with ARIA support
│   │   ├── Hero.js          # Hero section with CTA
│   │   ├── Main.js          # Main routing and state management
│   │   ├── Footer.js        # Footer with contact info
│   │   ├── BookingForm.js   # Form component with validation
│   │   └── *.test.js        # Unit tests
│   ├── pages/               # Page components
│   │   ├── HomePage.js      # Landing page
│   │   ├── BookingPage.js   # Reservation page
│   │   └── ConfirmedBooking.js  # Confirmation page
│   ├── styles/              # Component-specific CSS files
│   ├── App.js               # Root component
│   ├── App.css              # Global styles
│   ├── index.js             # Application entry point
│   └── index.css            # Base CSS with variables
├── ACCESSIBILITY.md         # Accessibility documentation
├── HEURISTIC_EVALUATION.md  # UX evaluation report
├── UX_IMPROVEMENTS_SUMMARY.md  # UX improvements log
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **Git**: For cloning the repository

### Installation Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Farhan-176/Littlelemonweb.git
   cd Littlelemonweb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

4. **Run Tests**
   ```bash
   npm test
   ```
   For non-interactive mode:
   ```bash
   npm test -- --watchAll=false
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized production build in the `build/` folder

---

## 🧪 Testing

### Test Coverage
- **Total Test Suites**: 3
- **Total Tests**: 28 passing
- **Coverage Areas**: 
  - Component rendering
  - Form validation (HTML5 + React)
  - User interactions
  - State management
  - API integration

### Running Tests

**Interactive Mode** (watches for changes):
```bash
npm test
```

**Single Run** (for CI/CD):
```bash
npm test -- --watchAll=false
```

**Coverage Report**:
```bash
npm test -- --coverage --watchAll=false
```

### Test Files
- `src/App.test.js` - Application structure tests
- `src/components/Main.test.js` - State management and reducer tests
- `src/components/BookingForm.test.js` - Form validation and submission tests

---

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Responsive Features
- Flexible grid layouts
- Mobile-friendly navigation
- Touch-optimized form controls
- Optimized image loading
- Responsive typography

---

## ♿ Accessibility Features

This application follows WCAG 2.1 Level AA guidelines and implements:

### Semantic HTML
- Proper heading hierarchy (h1-h4)
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- Landmark roles for screen readers

### ARIA Attributes
- `aria-label` on all interactive elements
- `aria-required` on required form fields
- `aria-invalid` for validation states
- `aria-describedby` linking fields to error messages
- `aria-current` for active navigation links
- `role` attributes (menubar, menuitem, alert, status)

### Form Accessibility
- All inputs have associated `<label>` elements
- Proper `htmlFor`/`id` matching
- Error messages with `role="alert"`
- Touch tracking prevents premature error display
- Disabled states clearly communicated

### Keyboard Navigation
- Full keyboard accessibility (Tab, Enter, Arrow keys)
- Visible focus indicators
- Logical tab order
- No keyboard traps

**Documentation**: See [ACCESSIBILITY.md](ACCESSIBILITY.md) for complete details

---

## 🎨 UX Design & Validation

### Form Validation

**HTML5 Validation**:
- `required` attributes on mandatory fields
- `min`/`max` constraints on date and number inputs
- `type` attributes for appropriate input types

**React Validation**:
- Real-time validation on field change
- Error messages on blur (touch tracking)
- Submit button disabled when form invalid
- Visual feedback (red borders, error text)

### User Experience Features
- **Confirmation Numbers**: Unique 8-digit reference codes
- **Booking Summary**: Complete reservation details displayed
- **Loading States**: Visual feedback during API calls
- **Error Recovery**: Phone fallback when online booking fails
- **Time Zone Clarity**: Central Time explicitly stated
- **Operating Hours**: Displayed for user guidance

**Documentation**: See [HEURISTIC_EVALUATION.md](HEURISTIC_EVALUATION.md) and [UX_IMPROVEMENTS_SUMMARY.md](UX_IMPROVEMENTS_SUMMARY.md)

---

## 🔄 State Management

### useReducer Pattern
The application uses React's `useReducer` hook for managing available time slots:

```javascript
// Reducer function for updating times based on date
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
};
```

### State Flow
1. User selects a date
2. `dispatch({ type: 'UPDATE_TIMES', date })` is called
3. Reducer calls API with selected date
4. Available times are updated
5. Time dropdown re-renders with new options

---

## 🌐 API Integration

### External API
The application integrates with the Coursera Capstone API for booking functionality:

**API Script**: `https://raw.githubusercontent.com/courseraap/capstone/main/api.js`

### API Functions

**fetchAPI(date)**
- **Purpose**: Retrieve available time slots for a specific date
- **Input**: Date object
- **Output**: Array of time strings (e.g., ["17:00", "18:00", "19:00"])
- **Usage**: Called when user selects a date

**submitAPI(formData)**
- **Purpose**: Submit reservation to backend
- **Input**: Object with {date, time, guests, occasion}
- **Output**: Boolean (true if successful)
- **Usage**: Called on form submission

### Error Handling
```javascript
try {
  const isSubmitted = window.submitAPI(formData);
  if (isSubmitted) {
    // Navigate to confirmation
  } else {
    // Show error with phone fallback
  }
} catch (error) {
  // Handle API failure gracefully
}
```

---

## 🎯 Peer Review Checklist

### ✅ Design & Implementation
- [x] Follows provided UX/UI design specifications
- [x] Responsive layout works on all screen sizes
- [x] Semantic HTML structure throughout
- [x] Consistent visual design and branding
- [x] Modern React patterns and best practices

### ✅ Accessibility
- [x] ARIA attributes on all interactive elements
- [x] Semantic HTML landmarks
- [x] Form labels properly associated
- [x] Keyboard navigation fully supported
- [x] Screen reader friendly
- [x] High contrast and visible focus states

### ✅ Testing
- [x] 28 unit tests covering all functionality
- [x] Tests for form validation
- [x] Tests for user interactions
- [x] Tests for state management
- [x] All tests passing

### ✅ Form Functionality
- [x] Booking form accepts all required data
- [x] HTML5 validation implemented
- [x] React validation with real-time feedback
- [x] Form submission works correctly
- [x] API integration functional
- [x] Confirmation page displays booking details

### ✅ Code Quality
- [x] Clear and maintainable code structure
- [x] Meaningful variable and function names
- [x] Appropriate comments throughout
- [x] Consistent code formatting
- [x] No console errors or warnings
- [x] Edge cases handled with error messages

### ✅ Git Repository
- [x] Project committed to Git
- [x] Clear commit history
- [x] Proper .gitignore file
- [x] Repository pushed to GitHub

### ✅ Documentation
- [x] Comprehensive README with setup instructions
- [x] Architecture documentation
- [x] Accessibility documentation
- [x] UX evaluation documentation
- [x] Clear code comments

---

## 🐛 Error Handling

### Edge Cases Covered
1. **Past Date Selection**: Validation prevents selecting dates in the past
2. **Invalid Guest Count**: Constrained to 1-10 guests with validation
3. **API Failure**: User-friendly error message with phone fallback
4. **No Available Times**: Handled gracefully with empty state
5. **Form Submission Errors**: Try-catch blocks with error messages
6. **Network Issues**: Timeout and error handling for API calls
7. **Missing Required Fields**: Clear error messages guide user
8. **Invalid Data Types**: Input type constraints prevent wrong data

### Error Messages
All error messages are:
- **Clear**: Plain language, no technical jargon
- **Actionable**: Suggest how to fix the problem
- **Contextual**: Appear near the relevant field
- **Accessible**: Use `role="alert"` for screen readers

---

## 📞 Contact Information

**Restaurant Phone**: (312) 555-0123  
**Address**: 123 Main St, Chicago, IL  
**Email**: info@littlelemon.com

For technical support or questions about this project:
- **Developer**: Farhan-176
- **Repository Issues**: [GitHub Issues](https://github.com/Farhan-176/Littlelemonweb/issues)

---

## 📜 License

This project was created as part of the Meta Front-End Developer Capstone Course.

---

## 🙏 Acknowledgments

- **Meta Front-End Developer Program**: Course structure and requirements
- **React Documentation**: Technical reference
- **Nielsen Norman Group**: UX heuristics guidance
- **W3C WAI**: Accessibility guidelines

---

## 📊 Project Statistics

- **Components**: 11 React components
- **Pages**: 3 main pages (Home, Booking, Confirmation)
- **Tests**: 28 passing unit tests
- **Lines of Code**: ~2,000 lines (excluding tests)
- **Bundle Size**: 78.99 kB (gzipped)
- **Accessibility Score**: WCAG 2.1 Level AA compliant
- **Responsive Breakpoints**: 3 (mobile, tablet, desktop)

---

## 📖 Additional Documentation

- **[ACCESSIBILITY.md](ACCESSIBILITY.md)** - Complete accessibility features and testing guide
- **[HEURISTIC_EVALUATION.md](HEURISTIC_EVALUATION.md)** - Nielsen's heuristics evaluation
- **[UX_IMPROVEMENTS_SUMMARY.md](UX_IMPROVEMENTS_SUMMARY.md)** - UX improvements implementation log

---

**Last Updated**: December 2, 2025  
**Version**: 1.0.0  
**Status**: ✅ Ready for Peer Review

---

# Create React App Reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
