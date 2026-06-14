// Config Layer
// Purpose: Keep environment-specific values in one place.
// In real projects, these values may come from .env files or CI/CD variables.

export const testConfig = {
  baseUrl: process.env.API_BASE_URL ?? 'http://127.0.0.1:3000',
  authToken: process.env.API_AUTH_TOKEN ?? 'demo-token-123'
};
