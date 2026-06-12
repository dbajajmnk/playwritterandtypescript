import { APIResponse, expect } from '@playwright/test';

// Utility Layer
// Purpose: Common helper functions reused across API tests.
// This avoids duplicate status-code and response-body parsing logic.

export async function expectStatus(response: APIResponse, expectedStatus: number) {
  expect(response.status()).toBe(expectedStatus);
}

export async function getJson<T>(response: APIResponse): Promise<T> {
  return (await response.json()) as T;
}

export function expectIsoDate(value: string) {
  const parsedDate = Date.parse(value);
  expect(Number.isNaN(parsedDate)).toBeFalsy();
}
