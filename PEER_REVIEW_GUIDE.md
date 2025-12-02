# Peer Review Guide - Little Lemon Restaurant Capstone Project

## 📋 Quick Start for Reviewers

### Prerequisites
- Node.js (v14+ recommended)
- npm (v6+ recommended)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Setup Instructions (5 minutes)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Farhan-176/Littlelemonweb.git
   cd Littlelemonweb
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Tests**
   ```bash
   npm test -- --watchAll=false
   ```
   ✅ Expected: **28 tests passing**

4. **Start Development Server**
   ```bash
   npm start
   ```
   Opens at: http://localhost:3000

5. **Build for Production** (optional)
   ```bash
   npm run build
   ```

---

## 🎯 Grading Criteria Checklist

Use this checklist when evaluating the project. Each section corresponds to the peer review requirements.

### 1️⃣ Design & Implementation of UX/UI

**What to Check:**
- [ ] Application matches the Little Lemon brand design
- [ ] Responsive layout works on different screen sizes
- [ ] Navigation is intuitive and consistent
- [ ] Visual hierarchy is clear
- [ ] Colors, typography, and spacing are consistent

**How to Test:**
1. Open the application at http://localhost:3000
2. Navigate through: Home → Reservations → Fill Form → Confirmation
3. Resize browser window to test responsive design
4. Check mobile view (DevTools → Toggle Device Toolbar)

**Expected Results:**
- Homepage displays hero section, specials, and testimonials
- Booking form is clean and well-organized
- Confirmation page shows complete booking details
- Layout adapts smoothly from mobile (320px) to desktop (1920px+)

**Documentation:** See [UX_IMPROVEMENTS_SUMMARY.md](UX_IMPROVEMENTS_SUMMARY.md)

---

### 2️⃣ Accessibility Tags

**What to Check:**
- [ ] ARIA attributes present on interactive elements
- [ ] Semantic HTML used throughout
- [ ] Form labels properly associated with inputs
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

**How to Test:**

**Visual Inspection:**
1. Open browser DevTools → Elements/Inspector
2. Check navigation: Look for `aria-label`, `role="menubar"`, `role="menuitem"`
3. Check form inputs: Verify `aria-required`, `aria-invalid`, `aria-describedby`
4. Check buttons: Confirm `aria-disabled` on disabled states

**Keyboard Testing:**
1. Press Tab repeatedly → Should navigate through all interactive elements
2. Press Enter on links/buttons → Should activate them
3. Use Arrow keys in select dropdowns → Should work
4. Check focus indicators → Should be visible

**Screen Reader Testing (Optional):**
- Windows: NVDA (free) or JAWS
- macOS: VoiceOver (built-in, Cmd+F5)
- Check that all elements are announced clearly

**Expected Results:**
- All interactive elements have ARIA labels
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- Form has proper `<label>` elements with `htmlFor` attributes
- Error messages use `role="alert"`
- All functionality accessible via keyboard

**Documentation:** See [ACCESSIBILITY.md](ACCESSIBILITY.md)

---

### 3️⃣ Unit Tests

**What to Check:**
- [ ] Tests exist for components
- [ ] Tests cover form validation
- [ ] Tests cover user interactions
- [ ] Tests cover state management
- [ ] All tests pass

**How to Test:**
```bash
npm test -- --watchAll=false
```

**Test Files to Review:**
1. `src/App.test.js` - Application structure (1 test)
2. `src/components/Main.test.js` - State management (7 tests)
3. `src/components/BookingForm.test.js` - Form validation (20 tests)

**Expected Results:**
```
Test Suites: 3 passed, 3 total
Tests:       28 passed, 28 total
```

**What Tests Cover:**
- Component rendering
- Form label presence
- HTML5 validation attributes (min, max, required)
- React validation (button enable/disable)
- Form submission with correct data
- API integration (dispatch actions)
- User interactions (typing, selecting, clicking)

---

### 4️⃣ Booking Form Functionality & Validation

**What to Check:**
- [ ] Form accepts all required data (date, time, guests)
- [ ] Optional occasion field works
- [ ] HTML5 validation implemented
- [ ] React validation with error messages
- [ ] Submit button disabled when invalid
- [ ] Form submission works

**How to Test:**

**Test 1: Happy Path (Valid Submission)**
1. Navigate to Reservations page
2. Select a future date
3. Choose a time slot
4. Enter number of guests (1-10)
5. Optionally select occasion
6. Click "Make Your Reservation"
7. ✅ Should navigate to confirmation page with details

**Test 2: Validation - Empty Fields**
1. Try to submit without filling anything
2. ✅ Submit button should be disabled
3. Click on date field and blur (click away)
4. ✅ Should show "Please select a date for your reservation"

**Test 3: Validation - Invalid Guest Count**
1. Enter 0 or 11+ in guests field
2. ✅ Should show error: "Party size must be between 1 and 10 guests"
3. ✅ Submit button should be disabled

**Test 4: Validation - Past Date**
1. Try to type a past date
2. ✅ Should be prevented by min attribute
3. ✅ Validation prevents past dates

**Test 5: Dynamic Time Slots**
1. Select different dates
2. ✅ Time dropdown should show "Loading available times..."
3. ✅ Time options should update based on date

**Expected Validation Features:**
- HTML5: `required`, `min`, `max`, `type="date"`, `type="number"`
- React: Real-time validation, error messages on blur
- Visual feedback: Red borders on invalid fields
- Disabled button when form invalid
- Loading states during API calls

---

### 5️⃣ Semantics & Responsiveness

**What to Check:**
- [ ] Semantic HTML elements used correctly
- [ ] Responsive design works on all devices
- [ ] Images have alt text
- [ ] Proper heading hierarchy

**How to Test:**

**Semantic HTML:**
1. Open DevTools → Elements
2. Check structure:
   - `<header>` contains logo and navigation
   - `<nav>` wraps navigation links
   - `<main>` contains primary content
   - `<footer>` contains contact info
   - `<section>` for distinct page sections
   - `<form>` for booking form

**Responsiveness:**
1. Desktop (1200px+): Full layout with all elements
2. Tablet (768px-1199px): Adjusted grid, stacked elements
3. Mobile (320px-767px): Single column, touch-friendly

**Test Breakpoints:**
- Open DevTools → Toggle Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M)
- Test: iPhone SE (375px), iPad (768px), Desktop (1920px)

**Expected Results:**
- Navigation adapts (hamburger menu on mobile if implemented)
- Form inputs are touch-friendly on mobile
- Images scale appropriately
- Text remains readable at all sizes
- No horizontal scrolling

**Documentation:** See [RESPONSIVE_LAYOUT.md](RESPONSIVE_LAYOUT.md)

---

### 6️⃣ Git Repository

**What to Check:**
- [ ] Project is committed to Git
- [ ] Repository has clear commit history
- [ ] Code is pushed to GitHub
- [ ] .gitignore excludes node_modules

**How to Test:**
```bash
# Check commit history
git log --oneline

# Check remote
git remote -v

# Check .gitignore
cat .gitignore
```

**Expected Results:**
- Multiple commits with descriptive messages
- Remote points to: https://github.com/Farhan-176/Littlelemonweb.git
- .gitignore includes: node_modules, build, .env

**Recent Commit:**
```
Complete Meta Front-End Capstone: Full-featured table reservation system
```

---

### 7️⃣ Code Structure & Maintainability

**What to Check:**
- [ ] Clear folder structure
- [ ] Components well organized
- [ ] Meaningful variable/function names
- [ ] Code comments present
- [ ] Consistent formatting

**Files to Review:**

**Component Structure:**
```
src/
  components/     # Reusable components
    BookingForm.js    ← Check: JSDoc comments, validation logic
    Main.js           ← Check: State management, reducer pattern
    Nav.js            ← Check: Accessibility attributes
  pages/          # Page components
    BookingPage.js
    ConfirmedBooking.js
```

**Key Files with Comments:**
1. **src/components/Main.js**
   - JSDoc comments on all functions
   - Explains reducer pattern
   - Documents error handling

2. **src/components/BookingForm.js**
   - Component-level documentation
   - Explains validation rules
   - Documents state management

3. **src/pages/ConfirmedBooking.js**
   - Documents date formatting
   - Explains route state handling

**What to Look For:**
- Functions have descriptive names (e.g., `getTodayDate`, `formatDate`)
- Variables are clear (e.g., `isFormValid`, `isSubmitting`)
- Complex logic has explanatory comments
- JSDoc comments on exported functions

---

### 8️⃣ Edge Case Handling & Error Messages

**What to Check:**
- [ ] Past date selection prevented
- [ ] Invalid guest count handled
- [ ] API failures handled gracefully
- [ ] Empty/missing data validated
- [ ] Error messages are user-friendly

**Test Cases:**

**Edge Case 1: Direct Navigation to Confirmation**
1. Manually navigate to: http://localhost:3000/confirmed
2. ✅ Should display page without crashing
3. ✅ Shows message even without booking data

**Edge Case 2: API Unavailable**
- Test by commenting out API script in `public/index.html`
- ✅ Should show error message with phone number fallback

**Edge Case 3: Invalid Data Entry**
1. Try entering letters in guests field
2. ✅ Input type="number" prevents non-numeric input
3. Try entering 0 guests
4. ✅ Validation catches and shows error

**Edge Case 4: Form Submission During Loading**
1. Click submit button rapidly multiple times
2. ✅ `isSubmitting` state prevents double submission

**Expected Error Messages:**
- Clear language (no technical jargon)
- Actionable (tells user how to fix)
- Contextual (appears near relevant field)
- Accessible (uses `role="alert"`)

**Examples:**
- ❌ "Required field" → ✅ "Please select a date for your reservation"
- ❌ "Invalid input" → ✅ "Party size must be between 1 and 10 guests"
- ❌ "Error" → ✅ "Unable to confirm your reservation. Please try again or call us at (312) 555-0123"

---

### 9️⃣ Documentation (README & Setup)

**What to Check:**
- [ ] README exists and is comprehensive
- [ ] Setup instructions are clear
- [ ] All dependencies listed
- [ ] Testing instructions included
- [ ] Architecture explained

**Files to Review:**
1. **README.md** - Main documentation
2. **ACCESSIBILITY.md** - Accessibility features
3. **HEURISTIC_EVALUATION.md** - UX evaluation
4. **UX_IMPROVEMENTS_SUMMARY.md** - Improvement log

**README Should Include:**
- Project overview and features
- Technology stack
- Installation steps (numbered, clear)
- How to run tests
- How to build for production
- Project structure explanation
- Accessibility information
- API integration details

**Test Setup Instructions:**
Follow the README from scratch to ensure:
1. Clone command works
2. npm install succeeds
3. npm test runs successfully
4. npm start launches app
5. All features work as documented

---

## ✅ Scoring Guidelines

### Excellent (90-100%)
- All criteria met completely
- Code is exceptionally clean and well-documented
- Going beyond requirements (e.g., loading states, detailed error handling)
- Comprehensive testing
- Excellent documentation

### Good (75-89%)
- All main criteria met
- Minor issues or missing minor features
- Good code quality and documentation
- Tests cover main functionality

### Satisfactory (60-74%)
- Most criteria met
- Some missing features or validation
- Code works but could be cleaner
- Basic documentation present

### Needs Improvement (<60%)
- Missing major requirements
- Significant bugs or validation issues
- Poor code structure
- Minimal or missing documentation

---

## 💡 Tips for Reviewers

1. **Be Constructive**: Provide specific feedback, not just criticism
2. **Test Thoroughly**: Don't just click through - try to break things
3. **Check Mobile**: Many developers forget mobile testing
4. **Read Code**: Look at 2-3 key files to assess quality
5. **Verify Tests**: Actually run the tests, don't just assume
6. **Follow README**: Setup should be smooth if docs are good

---

## 🎯 Summary Checklist

Quick reference for final review:

- [ ] Tests pass (28/28)
- [ ] App runs without errors
- [ ] Form validation works (HTML5 + React)
- [ ] Booking submission successful
- [ ] Confirmation page shows details
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] ARIA attributes present
- [ ] Code has comments
- [ ] README is comprehensive
- [ ] Git history is clear
- [ ] Edge cases handled
- [ ] Error messages helpful

---

## 📞 Questions or Issues?

If you encounter any issues during review:
1. Check the README setup instructions
2. Verify Node.js and npm versions
3. Try: `rm -rf node_modules && npm install`
4. Check GitHub Issues for known problems

**Project Repository**: https://github.com/Farhan-176/Littlelemonweb

---

**Review Date**: _______________  
**Reviewer Name**: _______________  
**Overall Score**: _____ / 100

**Comments:**
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

Thank you for taking the time to review this project! 🙏
