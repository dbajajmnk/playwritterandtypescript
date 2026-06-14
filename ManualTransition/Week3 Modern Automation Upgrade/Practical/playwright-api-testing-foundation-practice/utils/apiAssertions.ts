import { expect, APIResponse } from '@playwright/test';

// Utility layer: Common assertion helpers avoid repeated code in every test.

export async function expectStatus(response: APIResponse, expectedStatus: number) {
  expect(response.status(), `Expected status ${expectedStatus}`).toBe(expectedStatus);
}

export async function expectJsonField<T>(actual: T, expected: T) {
  expect(actual).toBe(expected);
}

export async function readJson(response: APIResponse) {
  return response.json();
}
