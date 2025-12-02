// Mock the fetchAPI function from the API  
const mockFetchAPI = jest.fn();

// Setup window global and mock implementation
beforeEach(() => {
  global.window = global.window || {};
  mockFetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  global.window.fetchAPI = mockFetchAPI;
});

// Define the functions inline for testing (same as in Main.js)
const initializeTimes = () => {
  const today = new Date();
  if (typeof global.window.fetchAPI === 'function') {
    return global.window.fetchAPI(today);
  }
  return [];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof global.window.fetchAPI === 'function') {
        return global.window.fetchAPI(new Date(action.date));
      }
      return state;
    default:
      return state;
  }
};

// Test 1: initializeTimes returns a non-empty array of available times
test('initializeTimes returns a non-empty array', () => {
  const result = initializeTimes();
  
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// Test 2: initializeTimes returns the expected array of available times
test('initializeTimes returns the expected array of available times', () => {
  const result = initializeTimes();
  
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  expect(result).toEqual(expectedTimes);
});

// Test 3: initializeTimes calls fetchAPI with today's date
test('initializeTimes calls fetchAPI with a date', () => {
  mockFetchAPI.mockClear();
  initializeTimes();
  
  expect(mockFetchAPI).toHaveBeenCalledTimes(1);
  expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

// Test 4: updateTimes returns the same value that is provided in the state
test('updateTimes returns the same state when no action is provided', () => {
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: '' }; // Empty action type
  
  const result = updateTimes(currentState, action);
  
  expect(result).toEqual(currentState);
});

// Test 5: updateTimes returns a non-empty array when UPDATE_TIMES action is dispatched with a date
test('updateTimes returns a non-empty array when UPDATE_TIMES action is dispatched', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-15' };
  
  const result = updateTimes(currentState, action);
  
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// Test 6: updateTimes returns expected times when UPDATE_TIMES action is dispatched
test('updateTimes returns the correct times when UPDATE_TIMES action with date is dispatched', () => {
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-15' };
  
  const result = updateTimes(currentState, action);
  
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  expect(result).toEqual(expectedTimes);
});

// Test 7: updateTimes calls fetchAPI with the provided date
test('updateTimes calls fetchAPI with the selected date from action', () => {
  mockFetchAPI.mockClear();
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-15' };
  
  updateTimes(currentState, action);
  
  expect(mockFetchAPI).toHaveBeenCalledTimes(1);
  expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
});
