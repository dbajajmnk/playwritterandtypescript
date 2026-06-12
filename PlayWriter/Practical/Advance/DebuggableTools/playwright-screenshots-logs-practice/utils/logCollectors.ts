import type { Page, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export type BrowserLog = {
  type: string;
  text: string;
};

export type NetworkLog = {
  method: string;
  url: string;
};

// Utility layer: reusable logging setup for all tests.
// This keeps test files clean and avoids duplicate page.on(...) code.
export function attachBrowserLogCollectors(page: Page) {
  const consoleLogs: BrowserLog[] = [];
  const networkLogs: NetworkLog[] = [];
  const pageErrors: string[] = [];

  // Console logs capture browser-side console.log, console.warn, and console.error.
  page.on('console', msg => {
    consoleLogs.push({
      type: msg.type(),
      text: msg.text()
    });
  });

  // Request logs capture outgoing network calls from the browser.
  page.on('request', request => {
    networkLogs.push({
      method: request.method(),
      url: request.url()
    });
  });

  // Page error logs capture uncaught JavaScript errors from the browser page.
  page.on('pageerror', error => {
    pageErrors.push(error.message);
  });

  return { consoleLogs, networkLogs, pageErrors };
}

// This helper writes collected logs into test-results as attachments.
// Attachments are useful in HTML reports and CI pipelines.
export async function attachLogsToReport(
  testInfo: TestInfo,
  logs: {
    consoleLogs: BrowserLog[];
    networkLogs: NetworkLog[];
    pageErrors: string[];
  }
) {
  const logDirectory = path.join(testInfo.outputDir, 'debug-logs');
  fs.mkdirSync(logDirectory, { recursive: true });

  const logFilePath = path.join(logDirectory, 'browser-debug-logs.json');
  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));

  await testInfo.attach('browser-debug-logs', {
    path: logFilePath,
    contentType: 'application/json'
  });
}
