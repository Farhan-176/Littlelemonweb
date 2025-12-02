# Little Lemon Style Guide

## Brand Identity

### Color Palette

```css
--primary-green: #495E57   /* Primary brand color - headings, navigation */
--primary-yellow: #F4CE14  /* Primary accent - buttons, highlights */
--secondary-orange: #EE9972 /* Hover states, secondary actions */
--secondary-peach: #FBDABB  /* Subtle accents */
--highlight-light: #EDEFEE /* Background sections, cards */
--white: #FFFFFF           /* Primary background */
--black: #000000           /* Text (rarely used) */
```

### Typography

**Display Font**: Markazi Text (serif)
- Used for: All headings (h1-h6), large display text
- Characteristics: Elegant, Mediterranean feel, high readability

**Body Font**: Karla (sans-serif)
- Used for: Paragraphs, navigation, buttons, forms
- Characteristics: Clean, modern, excellent readability

## HTML Element Styling

### Headings (h1-h6)

```css
h1 { font-size: 64px; font-weight: 500; }  /* Hero titles */
h2 { font-size: 40px; font-weight: 500; }  /* Section titles */
h3 { font-size: 32px; font-weight: 700; }  /* Subsection titles */
h4 { font-size: 24px; font-weight: 700; }  /* Card titles */
h5 { font-size: 20px; font-weight: 700; }  /* Small headings */
h6 { font-size: 18px; font-weight: 700; }  /* Smallest headings */
```

**Properties**:
- Font Family: `Markazi Text`, serif
- Color: `#495E57` (primary green)
- Line Height: 1.2
- Letter Spacing: -0.5px (h1 only)
- Margin: 0 (controlled by parent)

**Responsive**:
- Tablet (≤1024px): Reduced by ~20%
- Mobile (≤768px): Reduced by ~25%
- Small Mobile (≤480px): Reduced by ~35%

### Paragraphs (p)

```css
p {
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #495E57;
  margin: 0 0 1rem 0;
}
```

**Responsive**:
- Mobile: 16px
- Small Mobile: 14px

### Links (a)

**Default State**:
- Color: `#495E57` (primary green)
- Text Decoration: none
- Transition: 0.3s ease

**Hover State**:
- Color: `#EE9972` (secondary orange)

**Focus State**:
- Outline: 2px solid `#F4CE14`
- Outline Offset: 2px

### Navigation Elements

**nav**:
- Font Family: `Karla`, sans-serif
- Font Weight: 700

**nav ul**:
- List Style: none
- Display: flex
- Gap: 2rem (responsive)

**nav a**:
- Padding: 0.5rem 1rem
- Border Radius: 8px
- Text Transform: capitalize

**nav a:hover**:
- Background: `#F4CE14`
- Color: `#495E57`

**nav a.active**:
- Background: `#495E57`
- Color: `#FFFFFF`

### Images (img)

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

img:hover {
  transform: translateY(-2px);
}
```

**Key Features**:
- Rounded corners (16px) for modern, friendly look
- Responsive by default (max-width: 100%)
- Subtle hover animation
- Maintains aspect ratio

### Buttons

```css
button {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 16px;
  background-color: #F4CE14;
  color: #495E57;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
```

**Hover State**:
- Background: `#EE9972`
- Transform: translateY(-2px)
- Box Shadow: 0 4px 12px rgba(0,0,0,0.15)

**Active State**:
- Transform: translateY(0)

**Disabled State**:
- Opacity: 0.5
- Cursor: not-allowed

**Mobile**:
- Width: 100%
- Padding: 1rem

### Form Elements

**input, textarea, select**:
```css
{
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  padding: 0.75rem 1rem;
  border: 2px solid #EDEFEE;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: #495E57;
  transition: border-color 0.3s ease;
}
```

**Focus State**:
- Border Color: `#495E57`
- Box Shadow: 0 0 0 3px rgba(73,94,87,0.1)

**label**:
```css
{
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #495E57;
  margin-bottom: 0.5rem;
  display: block;
}
```

### Cards

```css
.card {
  background-color: #EDEFEE;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
```

## Design Patterns

### Border Radius
- **Large Elements** (buttons, cards, images): 16px
- **Small Elements** (inputs, badges): 8px
- **Rationale**: Friendly, approachable, modern aesthetic

### Shadows
- **Subtle**: `0 2px 8px rgba(0,0,0,0.1)` - Default cards
- **Elevated**: `0 4px 12px rgba(0,0,0,0.15)` - Hover states
- **Deep**: `0 8px 16px rgba(0,0,0,0.15)` - Active/focused elements

### Spacing System
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 3rem     /* 48px */
--spacing-xl: 4rem     /* 64px */
```

### Transitions
- **Standard**: `0.3s ease`
- **Applied to**: colors, transforms, box-shadows
- **Purpose**: Smooth, polished interactions

## Accessibility Features

### Focus States
- All interactive elements have visible focus indicators
- 2px outline with 2px offset
- Color: `#F4CE14` (high contrast against green)

### Touch Targets
- Minimum 44x44px on mobile (WCAG 2.1 compliance)
- Buttons expand to full width on mobile
- Adequate spacing between interactive elements

### Color Contrast
- Text on white: `#495E57` - WCAG AA compliant
- Buttons: `#F4CE14` bg + `#495E57` text - High contrast
- Hover states increase contrast

### Typography
- Minimum font size: 14px (small mobile)
- Line height: 1.6 for body text (optimal readability)
- Font scaling preserves readability at all sizes

## Responsive Design Philosophy

### Mobile-First Approach
Base styles designed for mobile, enhanced for larger screens

### Breakpoints
```css
/* Small Mobile */
@media (max-width: 480px) { }

/* Tablet/Large Mobile */
@media (max-width: 768px) { }

/* Tablet/Small Desktop */
@media (max-width: 1024px) { }
```

### Responsive Typography
Font sizes scale proportionally across breakpoints:
- Desktop: 100% (base sizes)
- Tablet: ~80-85%
- Mobile: ~75-80%
- Small Mobile: ~65-75%

## Component-Specific Styles

### Hero Section
- Background: `#495E57` (dark green)
- Title Color: `#F4CE14` (yellow)
- Subtitle: White
- Button: Yellow with green text

### Highlights/Specials
- Background: White
- Card Background: `#EDEFEE` (light gray)
- Price Color: `#EE9972` (orange)
- 3-column grid → 2-column → 1-column

### Testimonials
- Background: `#EDEFEE` (light gray)
- Card Background: White
- Star Rating: `#F4CE14` (yellow)
- 4-column grid → 2-column → 1-column

### Footer
- Background: `#495E57` (dark green)
- Text: White
- Heading Color: `#F4CE14` (yellow)
- Link Hover: Yellow

## Best Practices

### Do's
✅ Use CSS variables for colors and spacing
✅ Apply 16px border-radius to major elements
✅ Include hover/focus states for all interactive elements
✅ Scale typography responsively
✅ Maintain consistent spacing using spacing scale
✅ Use Markazi Text for headings, Karla for body

### Don'ts
❌ Mix px and rem inconsistently
❌ Use colors outside brand palette
❌ Create buttons without hover states
❌ Forget mobile-first considerations
❌ Use font sizes below 14px
❌ Ignore accessibility (focus states, contrast)

## Testing Checklist

- [ ] All headings use Markazi Text
- [ ] Body text uses Karla
- [ ] Colors match brand palette
- [ ] Border radius is 16px (or 8px for small elements)
- [ ] All buttons have hover states
- [ ] Forms have proper focus states
- [ ] Images have rounded corners
- [ ] Layout is responsive (test 320px, 768px, 1440px)
- [ ] Typography scales properly on mobile
- [ ] Touch targets are minimum 44x44px
- [ ] Color contrast meets WCAG AA
- [ ] All interactive elements have focus indicators

---

**Version**: 1.0
**Last Updated**: December 2, 2025
**Author**: Little Lemon Design Team
