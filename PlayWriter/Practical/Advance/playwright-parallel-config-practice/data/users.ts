// Data Layer
// Test data is kept outside test files so the same users can be reused across tests.
export const users = {
  validUser: {
    email: 'user@test.com',
    password: '123456'
  },
  invalidUser: {
    email: 'wrong@test.com',
    password: 'wrong-password'
  }
};
