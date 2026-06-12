import { test, expect } from '../fixtures/apiFixtures';
import { users } from '../data/users';
import { products } from '../data/products';
import { createUserPayload } from '../utils/payloadFactory';
import { expectIsoDate, expectStatus, getJson } from '../utils/assertionUtils';

type UserResponse = {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

test.describe('API Testing Using Playwright - Reusable Architecture', () => {
  test.beforeAll(async () => {
    // beforeAll runs once before all tests in this file.
    // Use it for one-time setup like logging test start or preparing external data.
    console.log('Starting API testing practice suite');
  });

  test.beforeEach(async () => {
    // beforeEach runs before every test.
    // In API testing, this is useful for resetting data or printing scenario boundaries.
    console.log('Running next API test');
  });

  test.afterEach(async ({}, testInfo) => {
    // afterEach runs after every test.
    // testInfo gives useful details for debugging failed tests.
    console.log(`Finished: ${testInfo.title} - ${testInfo.status}`);
  });

  test.afterAll(async () => {
    // afterAll runs once after all tests.
    console.log('Completed API testing practice suite');
  });

  test('GET API: should return health status', async ({ request }) => {
    const response = await request.get('/health');

    await expectStatus(response, 200);
    await expect(response).toBeOK();

    const body = await getJson<{ status: string; service: string }>(response);
    expect(body.status).toBe('ok');
    expect(body.service).toBe('sample-api');
  });

  test('GET API using client layer: should return product list', async ({ productApi }) => {
    const response = await productApi.getProducts();

    await expectStatus(response, 200);

    const body = await getJson<{ products: unknown[] }>(response);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('GET API with query params: should search products', async ({ productApi }) => {
    const response = await productApi.searchProducts(products.existingSearchText);

    await expectStatus(response, 200);

    const body = await getJson<{ results: { name: string }[] }>(response);
    expect(body.results.length).toBeGreaterThan(0);
    expect(body.results[0].name).toContain(products.existingSearchText);
  });

  test('POST API: should create a new user', async ({ userApi }) => {
    const payload = createUserPayload('Created User');
    const response = await userApi.createUser(payload);

    await expectStatus(response, 201);

    const createdUser = await getJson<UserResponse>(response);
    expect(createdUser.id).toBeGreaterThan(0);
    expect(createdUser.name).toBe(payload.name);
    expect(createdUser.email).toBe(payload.email);
    expectIsoDate(createdUser.createdAt);
  });

  test('POST API negative test: should reject invalid user payload', async ({ userApi }) => {
    const response = await userApi.createUser(users.invalidUser);

    await expectStatus(response, 400);

    const body = await getJson<{ error: string }>(response);
    expect(body.error).toContain('Valid name and email are required');
  });

  test('GET API by id: should return created user details', async ({ userApi }) => {
    const createResponse = await userApi.createUser(createUserPayload('Find By Id User'));
    const createdUser = await getJson<UserResponse>(createResponse);

    const getResponse = await userApi.getUserById(createdUser.id);

    await expectStatus(getResponse, 200);

    const foundUser = await getJson<UserResponse>(getResponse);
    expect(foundUser.id).toBe(createdUser.id);
    expect(foundUser.email).toBe(createdUser.email);
  });

  test('PUT API: should update full user details', async ({ userApi }) => {
    const createResponse = await userApi.createUser(createUserPayload('Before Put User'));
    const createdUser = await getJson<UserResponse>(createResponse);

    const updatePayload = {
      name: users.updateUser.name,
      email: createdUser.email,
      role: users.updateUser.role
    };

    const updateResponse = await userApi.updateUser(createdUser.id, updatePayload);

    await expectStatus(updateResponse, 200);

    const updatedUser = await getJson<UserResponse>(updateResponse);
    expect(updatedUser.name).toBe(updatePayload.name);
    expect(updatedUser.role).toBe(updatePayload.role);
  });

  test('PATCH API: should partially update user role', async ({ userApi }) => {
    const createResponse = await userApi.createUser(createUserPayload('Before Patch User'));
    const createdUser = await getJson<UserResponse>(createResponse);

    const patchResponse = await userApi.patchUser(createdUser.id, {
      role: 'admin'
    });

    await expectStatus(patchResponse, 200);

    const patchedUser = await getJson<UserResponse>(patchResponse);
    expect(patchedUser.role).toBe('admin');
    expect(patchedUser.email).toBe(createdUser.email);
  });

  test('DELETE API: should remove user', async ({ userApi }) => {
    const createResponse = await userApi.createUser(createUserPayload('Delete User'));
    const createdUser = await getJson<UserResponse>(createResponse);

    const deleteResponse = await userApi.deleteUser(createdUser.id);
    await expectStatus(deleteResponse, 204);

    const getResponseAfterDelete = await userApi.getUserById(createdUser.id);
    await expectStatus(getResponseAfterDelete, 404);
  });

  test('Auth API: should login and return token', async ({ authApi }) => {
    const response = await authApi.login('admin@test.com', '123456');

    await expectStatus(response, 200);

    const body = await getJson<{ token: string; user: { email: string } }>(response);
    expect(body.token).toBeTruthy();
    expect(body.user.email).toBe('admin@test.com');
  });

  test('Authenticated API using fixture token: should return profile', async ({ authApi, authToken }) => {
    const response = await authApi.getProfile(authToken);

    await expectStatus(response, 200);

    const profile = await getJson<{ email: string; role: string }>(response);
    expect(profile.email).toBe('admin@test.com');
    expect(profile.role).toBe('admin');
  });

  test('Auth negative test: should reject wrong token', async ({ authApi }) => {
    const response = await authApi.getProfile('wrong-token');

    await expectStatus(response, 401);

    const body = await getJson<{ error: string }>(response);
    expect(body.error).toBe('Unauthorized');
  });
});
