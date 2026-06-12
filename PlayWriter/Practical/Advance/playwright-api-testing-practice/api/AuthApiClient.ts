import { APIRequestContext } from '@playwright/test';

// API Client Layer
// Purpose: Keep authentication related API calls in one place.

export class AuthApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async login(email: string, password: string) {
    return this.request.post('/api/auth/login', {
      data: {
        email,
        password
      }
    });
  }

  async getProfile(token: string) {
    return this.request.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
