import type { Page, TestInfo } from '@playwright/test';
import path from 'path';

// Utility layer: reusable screenshot helper.
// Manual screenshots are useful when you want evidence at a specific step.
export async function captureStepScreenshot(page: Page, testInfo: TestInfo, name: string) {
  const screenshotPath = path.join(testInfo.outputDir, `${name}.png`);

  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  await testInfo.attach(name, {
    path: screenshotPath,
    contentType: 'image/png'
  });
}
