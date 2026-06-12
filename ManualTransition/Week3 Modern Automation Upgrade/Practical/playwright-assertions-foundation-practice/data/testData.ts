// Data layer keeps test values outside the test logic.
// This avoids hardcoding repeated values in every test.
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

export const profileData = {
  fullName: 'Deepak Automation Learner'
};
