// DATA LAYER
// This file keeps test data separate from tests and page objects.
// Benefit: if credentials change, update this file only.

export const users = {
  validUser: {
    email: 'user@test.com',
    password: '123456',
    name: 'Deepak Learner',
  },
  invalidUser: {
    email: 'wrong@test.com',
    password: 'wrong-password',
  },
};
