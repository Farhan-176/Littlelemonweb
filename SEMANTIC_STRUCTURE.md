# Little Lemon - Semantic HTML Structure

## Overview
This document outlines the semantic HTML5 structure implemented in the Little Lemon React application.

## Document Structure

```
<> (React Fragment - Root)
  │
  ├── <header> (Header.js)
  │   │
  │   └── <nav> (Nav.js)
  │       ├── <img> - Logo
  │       └── <ul> - Navigation Links
  │           ├── <li><a> Home
  │           ├── <li><a> About
  │           ├── <li><a> Menu
  │           ├── <li><a> Reservations
  │           ├── <li><a> Order Online
  │           └── <li><a> Login
  │
  ├── <main> (Main.js)
  │   │
  │   ├── <section> Hero (Hero.js)
  │   ├── <section> Highlights (Highlights.js)
  │   ├── <section> Testimonials (Testimonials.js)
  │   ├── <section> About (About.js)
  │   └── <section> Reservations (Reservations.js) [conditional]
  │
  └── <footer> (Footer.js)
      │
      ├── <div> - Logo Section
      │   └── <img> - Footer Logo
      │
      ├── <nav aria-label="Footer Navigation">
      │   ├── <h4> Doormat Navigation
      │   └── <ul> Navigation Links
      │
      ├── <address>
      │   ├── <h4> Contact
      │   └── <ul> Contact Information
      │       ├── Address
      │       ├── <a href="tel:"> Phone
      │       └── <a href="mailto:"> Email
      │
      └── <nav aria-label="Social Media">
          ├── <h4> Social Media Links
          └── <ul> Social Links
```

## Semantic Elements Used

### 1. **React Fragment (`<> </>`)** 
- Replaces the non-semantic `<div>` as the root element
- Provides a clean wrapper without adding extra DOM nodes

### 2. **`<header>`** (Header.js)
- Contains the site header with navigation
- Sticky positioned for persistent navigation access

### 3. **`<nav>`** (Nav.js)
- Primary navigation with logo and menu links
- Uses `<ul>` and `<li>` for proper list structure
- Includes ARIA labels for accessibility in footer navigation

### 4. **`<main>`** (Main.js)
- Contains the primary content of the page
- Dynamically renders different page content
- Only one `<main>` element per page

### 5. **`<section>`** (Various Components)
- Hero, Highlights, Testimonials, About, Reservations
- Each represents a thematic grouping of content

### 6. **`<footer>`** (Footer.js)
- Contains site footer information
- Includes:
  - Logo
  - Navigation links (using `<nav>`)
  - Contact information (using `<address>`)
  - Social media links (using `<nav>`)

### 7. **`<address>`**
- Used for contact information in footer
- Contains phone (with `tel:` link) and email (with `mailto:` link)

## Accessibility Features

1. **Semantic HTML**: Screen readers can identify and navigate page structure
2. **ARIA Labels**: Footer navigation sections have descriptive labels
3. **Proper Link Markup**: Phone and email are clickable links
4. **List Structure**: Navigation uses proper `<ul>` and `<li>` elements
5. **Alt Text**: All images have descriptive alt attributes

## Component Hierarchy

```
App.js
├── Header.js
│   └── Nav.js
├── Main.js
│   ├── Hero.js
│   ├── Highlights.js
│   ├── Testimonials.js
│   ├── About.js
│   └── Reservations.js
└── Footer.js
```

## Benefits of This Structure

1. **SEO**: Search engines can better understand content structure
2. **Accessibility**: Screen readers can navigate and announce content properly
3. **Maintainability**: Clear separation of concerns with semantic meaning
4. **Standards Compliance**: Follows HTML5 best practices
5. **Future-Proof**: Easy to extend and modify individual sections

## Navigation Structure

### Primary Navigation (Header)
- Logo (clickable - returns to home)
- Home
- About
- Menu
- Reservations
- Order Online
- Login

### Footer Navigation
- Doormat Navigation (same as primary)
- Contact Information
- Social Media Links
