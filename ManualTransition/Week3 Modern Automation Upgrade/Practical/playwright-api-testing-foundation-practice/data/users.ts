// Data layer: Test payloads should stay separate from test logic.
// This makes tests cleaner and easier to maintain.

export const validUserPayload = {
  name: 'Amit Sharma',
  role: 'user',
  active: true,
  address: {
    city: 'Noida',
    country: 'India'
  }
};

export const updateUserPayload = {
  name: 'Deepak Updated',
  role: 'admin',
  active: false,
  address: {
    city: 'Gurugram',
    country: 'India'
  }
};

export const invalidUserPayload = {
  role: 'user'
};
