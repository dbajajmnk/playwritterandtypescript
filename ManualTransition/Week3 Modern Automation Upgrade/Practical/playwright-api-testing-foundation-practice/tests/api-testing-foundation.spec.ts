import { test, expect } from '@playwright/test';
import { invalidUserPayload, updateUserPayload, validUserPayload } from '../data/users';
import { expectStatus, readJson } from '../utils/apiAssertions';

// API Testing Foundation
// This file demonstrates HTTP methods, status assertions, JSON field validation,
// nested JSON validation, and negative testing using Playwright request fixture.

test.describe('API Testing Foundations using Playwright', () => {
  test('GET API: should return all users with status 200 and JSON body', async ({ request }) => {
    // GET is used to read/fetch data from the API.
    const response = await request.get('/users');

    await expectStatus(response, 200);

    const body = await readJson(response);

    // Status code alone is not enough; validate response body also.
    expect(body.count).toBeGreaterThan(0);
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data[0]).toHaveProperty('id');
    expect(body.data[0]).toHaveProperty('name');
  });

  test('GET API with path parameter: should return one user by id', async ({ request }) => {
    const response = await request.get('/users/1');

    await expectStatus(response, 200);

    const body = await response.json();

    // Field validation checks exact business data.
    expect(body.data.id).toBe(1);
    expect(body.data.name).toBe('Deepak');

    // Nested JSON validation checks deeper response structure.
    expect(body.data.address.city).toBe('Delhi');
    expect(body.data.address.country).toBe('India');
  });

  test('GET API with query parameter: should filter users by role', async ({ request }) => {
    const response = await request.get('/users', {
      params: {
        role: 'admin'
      }
    });

    await expectStatus(response, 200);

    const body = await response.json();

    expect(body.count).toBeGreaterThanOrEqual(1);
    expect(body.data.every((user: { role: string }) => user.role === 'admin')).toBe(true);
  });

  test('POST API: should create user and validate response fields', async ({ request }) => {
    // POST is used to create a new resource.
    const response = await request.post('/users', {
      data: validUserPayload
    });

    await expectStatus(response, 201);

    const body = await response.json();

    expect(body.created).toBe(true);
    expect(body.data.id).toBeGreaterThan(0);
    expect(body.data.name).toBe(validUserPayload.name);
    expect(body.data.role).toBe(validUserPayload.role);
    expect(body.data.address.city).toBe(validUserPayload.address.city);
  });

  test('PUT API: should update user and validate updated JSON', async ({ request }) => {
    // PUT is used to update/replace an existing resource.
    const response = await request.put('/users/1', {
      data: updateUserPayload
    });

    await expectStatus(response, 200);

    const body = await response.json();

    expect(body.updated).toBe(true);
    expect(body.data.id).toBe(1);
    expect(body.data.name).toBe(updateUserPayload.name);
    expect(body.data.active).toBe(false);
    expect(body.data.address.city).toBe(updateUserPayload.address.city);
  });

  test('DELETE API: should delete user and confirm deleted response', async ({ request }) => {
    // First create a user so this test remains independent.
    const createResponse = await request.post('/users', {
      data: {
        name: 'Delete Me',
        role: 'user'
      }
    });

    await expectStatus(createResponse, 201);
    const createdBody = await createResponse.json();
    const userId = createdBody.data.id;

    // DELETE is used to remove a resource.
    const deleteResponse = await request.delete(`/users/${userId}`);

    await expectStatus(deleteResponse, 200);

    const deleteBody = await deleteResponse.json();
    expect(deleteBody.deleted).toBe(true);
  });

  test('Negative API Testing: should return 404 for missing user', async ({ request }) => {
    const response = await request.get('/users/99999');

    await expectStatus(response, 404);

    const body = await response.json();
    expect(body.error).toBe('User not found');
  });

  test('Negative API Testing: should return 400 for invalid POST payload', async ({ request }) => {
    const response = await request.post('/users', {
      data: invalidUserPayload
    });

    await expectStatus(response, 400);

    const body = await response.json();
    expect(body.error).toBe('name and role are required');
  });
});
