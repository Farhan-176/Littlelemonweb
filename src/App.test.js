// Basic smoke test for the application
test('Application structure is valid', () => {
  // Test that our test suite is working
  expect(true).toBe(true);
  
  // Verify that critical components exist
  const fs = require('fs');
  const path = require('path');
  
  // Check that key files exist
  expect(fs.existsSync(path.join(__dirname, 'App.js'))).toBe(true);
  expect(fs.existsSync(path.join(__dirname, 'components', 'Main.js'))).toBe(true);
  expect(fs.existsSync(path.join(__dirname, 'components', 'BookingForm.js'))).toBe(true);
});
