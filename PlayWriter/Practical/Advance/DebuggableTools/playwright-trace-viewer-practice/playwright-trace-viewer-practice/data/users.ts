// Data Layer
// Keep test data outside test files so the same user can be reused across multiple tests.
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
