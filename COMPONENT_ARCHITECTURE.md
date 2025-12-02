# Component Architecture & Routing Setup

## Component Structure

The Little Lemon website is built using **component-based architecture** with **React Router** for client-side navigation.

### Core Components

#### 1. **App.js** (Root Component)
- Wraps entire application with `<Router>`
- Contains: Header → Nav, Main (Routes), Footer
- Manages global application structure

#### 2. **Header.js** (Semantic wrapper)
- Contains the navigation component
- Sticky positioning for persistent access

#### 3. **Nav.js** (Navigation Bar)
- Logo with Link to home
- Navigation menu with NavLink components
- Active state highlighting
- Responsive mobile layout

#### 4. **Main.js** (Route Container)
- Contains `<Routes>` component
- Defines all application routes
- Renders page components based on URL

#### 5. **Footer.js**
- Site-wide footer with links
- Contact information
- Social media links

### Page Components

Located in `/src/pages/`:

#### **HomePage.js**
- Default route: `/`
- Composition:
  - Hero (CallToAction)
  - Highlights (Specials)
  - Testimonials (CustomersSay)
  - About (Chicago)

#### **BookingPage.js**
- Routes: `/booking` and `/reservations`
- Contains: Reservations component
- Table booking form

### Reusable Components

Located in `/src/components/`:

#### **Hero.js** (alias: CallToAction)
- Call-to-action section
- Restaurant description
- "Reserve a Table" button with Link to /booking
- Hero image

#### **Highlights.js** (alias: Specials)
- Weekly specials showcase
- 3-column grid of dish cards
- "Online Menu" button
- Loops over specials data

#### **Testimonials.js** (alias: CustomersSay)
- Customer reviews section
- 4-column grid of review cards
- Star ratings
- Customer names and review text

#### **About.js** (alias: Chicago)
- Restaurant backstory
- Description of Little Lemon Chicago
- Overlapping chef images

#### **Reservations.js**
- Table booking form
- Form fields: date, time, guests, occasion
- OccasionDropdown component integration
- Form submission handling

#### **OccasionDropdown.js**
- Custom animated dropdown
- Options: Birthday, Engagement, Anniversary
- Smooth animations and transitions

## Routing Configuration

### React Router Setup

```javascript
// App.js
import { BrowserRouter as Router } from 'react-router-dom';

<Router>
  <Header>
    <Nav />
  </Header>
  <Main />
  <Footer />
</Router>
```

### Routes Definition

```javascript
// Main.js
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/booking" element={<BookingPage />} />
  <Route path="/reservations" element={<BookingPage />} />
</Routes>
```

### Navigation Links

```javascript
// Nav.js
import { Link, NavLink } from 'react-router-dom';

// Logo link
<Link to="/">
  <img src="/assets/Logo.svg" alt="Little Lemon Logo" />
</Link>

// Navigation links with active state
<NavLink 
  to="/" 
  className={({ isActive }) => isActive ? 'active' : ''}
>
  Home
</NavLink>

<NavLink 
  to="/booking"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  Reservations
</NavLink>
```

### Button Navigation

```javascript
// Hero.js
import { Link } from 'react-router-dom';

<Link to="/booking">
  <button className="reserve-button">Reserve a Table</button>
</Link>
```

## Component Naming Conventions

Two naming systems are used for flexibility:

### Original Names
- `Hero` - Call-to-action section
- `Highlights` - Weekly specials
- `Testimonials` - Customer reviews
- `About` - Restaurant backstory

### Exercise Aliases
- `CallToAction` → Hero
- `Specials` → Highlights
- `CustomersSay` → Testimonials
- `Chicago` → About

Both naming conventions work identically (aliases export original components).

## Component Reusability

### Benefits of Component-Based Architecture

1. **Reusability**: Nav component used across all pages
2. **Maintainability**: Update once, reflects everywhere
3. **Scalability**: Easy to add new pages/components
4. **Separation of Concerns**: Each component has single responsibility
5. **Testing**: Components can be tested independently

### Example: Nav Component Reuse

The same `<Nav />` component appears on:
- Homepage (/)
- Booking Page (/booking)
- Any future pages

No duplication of code needed!

## Routing Features

### Client-Side Navigation
- **No page reloads**: Instant transitions
- **Smooth experience**: Better UX than traditional links
- **Preserved state**: React state maintained across navigation

### Active Link Styling
```css
nav a.active {
  background-color: #495E57;
  color: #FFFFFF;
}
```

NavLink automatically applies `.active` class to current route.

### Multiple Route Paths
```javascript
<Route path="/booking" element={<BookingPage />} />
<Route path="/reservations" element={<BookingPage />} />
```

Both `/booking` and `/reservations` render the same component.

## File Structure

```
src/
├── App.js                    # Root component with Router
├── App.css                   # Global styles
├── pages/
│   ├── HomePage.js           # Home page composition
│   └── BookingPage.js        # Booking page
├── components/
│   ├── Header.js             # Header wrapper
│   ├── Nav.js                # Navigation with routing
│   ├── Main.js               # Route container
│   ├── Footer.js             # Footer
│   ├── Hero.js               # CTA section
│   ├── Highlights.js         # Specials section
│   ├── Testimonials.js       # Reviews section
│   ├── About.js              # Restaurant story
│   ├── Reservations.js       # Booking form
│   ├── OccasionDropdown.js   # Custom dropdown
│   ├── CallToAction.js       # Alias for Hero
│   ├── Specials.js           # Alias for Highlights
│   ├── CustomersSay.js       # Alias for Testimonials
│   └── Chicago.js            # Alias for About
```

## Future Expansion

### Adding New Pages

1. Create page component in `/src/pages/`
2. Add route in `Main.js`:
   ```javascript
   <Route path="/menu" element={<MenuPage />} />
   ```
3. Add navigation link in `Nav.js`:
   ```javascript
   <NavLink to="/menu">Menu</NavLink>
   ```

### Adding New Sections

1. Create component in `/src/components/`
2. Import into page component
3. Add to page composition
4. Style with CSS

## Testing Navigation

### Manual Testing Checklist

- [ ] Click logo → navigates to home
- [ ] Click "Home" link → navigates to home (/ route)
- [ ] Click "Reservations" link → navigates to booking (/booking route)
- [ ] Click "Reserve a Table" button → navigates to booking
- [ ] Active link highlights correctly
- [ ] Browser back/forward buttons work
- [ ] Direct URL access works (e.g., http://localhost:3000/booking)
- [ ] Page doesn't reload on navigation (check network tab)

## Best Practices

### Do's
✅ Use `<Link>` and `<NavLink>` for internal navigation
✅ Use `<Routes>` to define all routes in one place
✅ Keep page components in `/pages/` folder
✅ Keep reusable components in `/components/` folder
✅ Use NavLink for navigation menu items (automatic active state)
✅ Wrap entire app with `<Router>` in App.js

### Don'ts
❌ Don't use `<a href>` for internal links (causes page reload)
❌ Don't define routes in multiple places
❌ Don't forget to import Router components
❌ Don't nest `<Router>` components
❌ Don't use `window.location` for navigation

## Dependencies

```json
{
  "react-router-dom": "^6.x.x"
}
```

Installed with:
```bash
npm install react-router-dom
```

---

**Version**: 1.0  
**Last Updated**: December 2, 2025  
**Status**: ✅ All routes functional, navigation working correctly
