// Config layer: Keep reusable environment values outside test logic.
// In real projects, these values can come from .env or CI variables.
export const testConfig = {
  apiBaseUrl: 'http://127.0.0.1:3100',
  defaultTimeoutMs: 5000
};
