// Utility Layer
// Purpose: Generate dynamic payloads to avoid duplicate email conflicts.
// This is useful for POST API testing where unique records are required.

export function uniqueEmail(prefix = 'user') {
  return `${prefix}.${Date.now()}@test.com`;
}

export function createUserPayload(name = 'API Test User') {
  return {
    name,
    email: uniqueEmail('api.user'),
    role: 'student'
  };
}
