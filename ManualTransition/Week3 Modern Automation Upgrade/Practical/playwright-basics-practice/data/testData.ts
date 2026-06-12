// Data Layer
// Keeping data outside test files makes the tests cleaner and easier to maintain.
export const validUser = {
  email: 'user@test.com',
  password: '123456'
};

export const invalidUser = {
  email: 'wrong@test.com',
  password: 'wrong-password'
};
