const assert = require('assert');
const { getHealthMessage } = require('../sample-app/src/app');

// Smoke test stage simulation.
// Smoke tests are small, fast tests that verify the application is basically working.
assert.strictEqual(getHealthMessage(), 'Health check passed');

console.log('TEST STAGE: Smoke test passed successfully.');
