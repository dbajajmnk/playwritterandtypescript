import { APIRequestContext } from '@playwright/test';

export type CreateUserPayload = {
  name: string;
  email: string;
  role: string;
};

export type UpdateUserPayload = Partial<CreateUserPayload>;

// API Client Layer
// Purpose: Encapsulate all user API endpoint calls in one reusable class.
// Tests should call methods like createUser() instead of writing raw URLs everywhere.

export class UserApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getUsers() {
    return this.request.get('/api/users');
  }

  async getUserById(userId: number) {
    return this.request.get(`/api/users/${userId}`);
  }

  async createUser(payload: CreateUserPayload) {
    return this.request.post('/api/users', {
      data: payload
    });
  }

  async updateUser(userId: number, payload: UpdateUserPayload) {
    return this.request.put(`/api/users/${userId}`, {
      data: payload
    });
  }

  async patchUser(userId: number, payload: UpdateUserPayload) {
    return this.request.patch(`/api/users/${userId}`, {
      data: payload
    });
  }

  async deleteUser(userId: number) {
    return this.request.delete(`/api/users/${userId}`);
  }
}
