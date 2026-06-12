// Data layer: test data is kept outside test files.
// This makes data easy to reuse and update.
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
