// UTILITY LAYER
// Utilities contain common helper functions that can be reused across tests.
// Utilities should not know anything about Playwright page locators.

export function normalizeText(value: string): string {
  // Removes extra spaces and converts text to lowercase for safe comparison.
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function buildOrderNote(productName: string): string {
  // Example of reusable business formatting logic.
  return `Order created for ${productName}`;
}
