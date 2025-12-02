import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

// Test 1: Renders static text in BookingForm component
test('Renders the BookingForm heading', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const headingElement = screen.getByText(/Choose date/);
  expect(headingElement).toBeInTheDocument();
});

// Test 2: Renders all form labels
test('Renders all form labels correctly', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  expect(screen.getByText(/Choose date/)).toBeInTheDocument();
  expect(screen.getByText(/Choose time/)).toBeInTheDocument();
  expect(screen.getByText(/Number of guests/)).toBeInTheDocument();
  expect(screen.getByText(/Occasion/)).toBeInTheDocument();
});

// Test 3: Renders submit button with correct text
test('Renders the submit button', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeInTheDocument();
});

// Test 4: Renders available times in the select element
test('Renders available time options', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const timeSelect = screen.getByLabelText(/choose time/i);
  const options = timeSelect.querySelectorAll('option');
  
  // +1 for the "Select a time" placeholder option
  expect(options).toHaveLength(mockAvailableTimes.length + 1);
});

// Test 5: All form inputs are present
test('Renders all required form inputs', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

// Test 6: Submit button is disabled when form is invalid
test('Submit button is disabled initially', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  expect(submitButton).toBeDisabled();
});

// Test 7: Form inputs have correct HTML5 validation attributes
test('Form inputs have correct validation attributes', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('min');
  expect(dateInput).toHaveAttribute('max');
  
  expect(timeSelect).toHaveAttribute('required');
  
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

// Test 8: Date input validates min date is today
test('Date input has min attribute set to today or later', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const minDate = dateInput.getAttribute('min');
  
  // Verify min date is in YYYY-MM-DD format
  expect(minDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  
  // Verify min date is today or in the future
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDateObj = new Date(minDate);
  expect(minDateObj >= today).toBe(true);
});

// Test 9: Date input has max date set to future
test('Date input has max attribute set to future date', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const maxDate = dateInput.getAttribute('max');
  
  // Verify max date is in YYYY-MM-DD format
  expect(maxDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  
  // Verify max date is in the future
  const today = new Date();
  const maxDateObj = new Date(maxDate);
  expect(maxDateObj > today).toBe(true);
});

// Test 10: Guests input validates range with HTML5 attributes
test('Guests input enforces min and max values', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const guestsInput = screen.getByLabelText(/number of guests/i);
  
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput.value).toBe('1'); // Default value
});

// Test 11: Submit button enables when form is valid (all required fields filled)
test('Submit button is enabled when all required fields are valid', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Initially disabled
  expect(submitButton).toBeDisabled();
  
  // Fill in date
  await userEvent.type(dateInput, '2025-12-25');
  
  // Select time
  await userEvent.selectOptions(timeSelect, '18:00');
  
  // Submit button should now be enabled
  expect(submitButton).toBeEnabled();
});

// Test 12: Submit button remains disabled with missing date
test('Submit button stays disabled when date is missing', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const timeSelect = screen.getByLabelText(/choose time/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Only select time, not date
  await userEvent.selectOptions(timeSelect, '18:00');
  
  // Submit button should remain disabled
  expect(submitButton).toBeDisabled();
});

// Test 13: Submit button remains disabled with missing time
test('Submit button stays disabled when time is missing', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Only fill date, not time
  await userEvent.type(dateInput, '2025-12-25');
  
  // Submit button should remain disabled
  expect(submitButton).toBeDisabled();
});

// Test 14: Submit button disabled with invalid guest count (below minimum)
test('Submit button is disabled when guest count is below minimum', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Fill all fields
  await userEvent.type(dateInput, '2025-12-25');
  await userEvent.selectOptions(timeSelect, '18:00');
  
  // Clear and enter invalid guest count
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, '0');
  
  // Submit button should be disabled
  expect(submitButton).toBeDisabled();
});

// Test 15: Submit button disabled with invalid guest count (above maximum)
test('Submit button is disabled when guest count is above maximum', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Fill all fields
  await userEvent.type(dateInput, '2025-12-25');
  await userEvent.selectOptions(timeSelect, '18:00');
  
  // Clear and enter invalid guest count
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, '15');
  
  // Submit button should be disabled
  expect(submitButton).toBeDisabled();
});

// Test 16: Form calls submitForm when valid form is submitted
test('Form calls submitForm function with correct data when submitted', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Fill all fields
  await userEvent.type(dateInput, '2025-12-25');
  await userEvent.selectOptions(timeSelect, '18:00');
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, '4');
  await userEvent.selectOptions(occasionSelect, 'Birthday');
  
  // Submit form
  await userEvent.click(submitButton);
  
  // Verify submitForm was called with correct data
  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2025-12-25',
    time: '18:00',
    guests: 4,
    occasion: 'Birthday'
  });
});

// Test 17: Form does not submit when invalid
test('Form does not call submitForm when form is invalid', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const submitButton = screen.getByRole('button', { name: /make your reservation/i });
  
  // Try to submit without filling any fields (button is disabled so click won't work)
  // But we verify the button is disabled
  expect(submitButton).toBeDisabled();
  
  // Verify submitForm was never called
  expect(mockSubmitForm).not.toHaveBeenCalled();
});

// Test 18: Dispatch is called when date changes
test('Dispatch is called with UPDATE_TIMES action when date changes', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  
  // Change date
  await userEvent.type(dateInput, '2025-12-25');
  
  // Verify dispatch was called with UPDATE_TIMES action
  expect(mockDispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    date: '2025-12-25'
  });
});

// Test 19: Error message displays for invalid date after blur
test('Error message appears when date field is touched but empty', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const dateInput = screen.getByLabelText(/choose date/i);
  
  // Focus and blur without entering value
  await userEvent.click(dateInput);
  await userEvent.tab();
  
  // Error message should appear
  const errorMessage = screen.getByText(/please select a date/i);
  expect(errorMessage).toBeInTheDocument();
});

// Test 20: Error message displays for invalid time after blur
test('Error message appears when time field is touched but not selected', async () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  
  const timeSelect = screen.getByLabelText(/choose time/i);
  
  // Focus and blur without selecting value
  await userEvent.click(timeSelect);
  await userEvent.tab();
  
  // Error message should appear
  const errorMessage = screen.getByText(/please select a time/i);
  expect(errorMessage).toBeInTheDocument();
});
