// Data Layer
// Purpose: Keep reusable test data outside the test files.
// Tests should focus on scenario flow, not on hardcoded payload details.

export const users = {
  validUser: {
    name: 'Deepak Bajaj',
    email: 'deepak@test.com',
    role: 'student'
  },
  updateUser: {
    name: 'Deepak Kumar Bajaj',
    role: 'trainer'
  },
  invalidUser: {
    name: '',
    email: 'wrong-email-format',
    role: 'student'
  }
};
