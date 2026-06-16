# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: actions.spec.ts >> Playwright Actions Practice >> click action: user can login with valid credentials
- Location: tests\actions.spec.ts:9:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - textbox "Search" [ref=e2]
  - generic [ref=e3]:
    - heading "~ /" [level=1] [ref=e4]:
      - link "~" [ref=e5] [cursor=pointer]:
        - /url: /
      - text: /
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Basics 3/29/2026 8:36:30 PM" [ref=e8] [cursor=pointer]:
          - /url: /Basics
          - generic [ref=e9]: Basics
          - generic [ref=e10]: 3/29/2026 8:36:30 PM
      - listitem [ref=e11]:
        - link "JavaScript 4/5/2026 8:38:54 PM" [ref=e12] [cursor=pointer]:
          - /url: /JavaScript
          - generic [ref=e13]: JavaScript
          - generic [ref=e14]: 4/5/2026 8:38:54 PM
      - listitem [ref=e15]:
        - link "ManualTransition 6/2/2026 8:43:40 PM" [ref=e16] [cursor=pointer]:
          - /url: /ManualTransition
          - generic [ref=e17]: ManualTransition
          - generic [ref=e18]: 6/2/2026 8:43:40 PM
      - listitem [ref=e19]:
        - link "node_modules 6/7/2026 7:09:15 PM" [ref=e20] [cursor=pointer]:
          - /url: /node_modules
          - generic [ref=e21]: node_modules
          - generic [ref=e22]: 6/7/2026 7:09:15 PM
      - listitem [ref=e23]:
        - link "PlayWriter 4/19/2026 8:59:55 PM" [ref=e24] [cursor=pointer]:
          - /url: /PlayWriter
          - generic [ref=e25]: PlayWriter
          - generic [ref=e26]: 4/19/2026 8:59:55 PM
      - listitem [ref=e27]:
        - link "Real-World Automation & Capstone 4/9/2026 8:54:24 PM" [ref=e28] [cursor=pointer]:
          - /url: /Real-World%20Automation%20%26%20Capstone
          - generic [ref=e29]: Real-World Automation & Capstone
          - generic [ref=e30]: 4/9/2026 8:54:24 PM
      - listitem [ref=e31]:
        - link "tests 6/7/2026 7:09:16 PM" [ref=e32] [cursor=pointer]:
          - /url: /tests
          - generic [ref=e33]: tests
          - generic [ref=e34]: 6/7/2026 7:09:16 PM
      - listitem [ref=e35]:
        - link "Typescript 4/16/2026 8:45:52 AM" [ref=e36] [cursor=pointer]:
          - /url: /Typescript
          - generic [ref=e37]: Typescript
          - generic [ref=e38]: 4/16/2026 8:45:52 AM
      - listitem [ref=e39]:
        - link "package-lock.json 3013 6/7/2026 7:09:16 PM" [ref=e40] [cursor=pointer]:
          - /url: /package-lock.json
          - generic [ref=e41]: package-lock.json
          - generic [ref=e42]: "3013"
          - generic [ref=e43]: 6/7/2026 7:09:16 PM
      - listitem [ref=e44]:
        - link "package.json 730 6/7/2026 7:09:16 PM" [ref=e45] [cursor=pointer]:
          - /url: /package.json
          - generic [ref=e46]: package.json
          - generic [ref=e47]: "730"
          - generic [ref=e48]: 6/7/2026 7:09:16 PM
      - listitem [ref=e49]:
        - link "playwright.config.ts 2177 6/7/2026 7:09:16 PM" [ref=e50] [cursor=pointer]:
          - /url: /playwright.config.ts
          - generic [ref=e51]: playwright.config.ts
          - generic [ref=e52]: "2177"
          - generic [ref=e53]: 6/7/2026 7:09:16 PM
      - listitem [ref=e54]:
        - link "README.md 4758 4/12/2026 7:47:26 PM" [ref=e55] [cursor=pointer]:
          - /url: /README.md
          - generic [ref=e56]: README.md
          - generic [ref=e57]: "4758"
          - generic [ref=e58]: 4/12/2026 7:47:26 PM
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import path from 'path';
  3   | 
  4   | test.describe('Playwright Actions Practice', () => {
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto('/');
  7   |   });
  8   | 
  9   |   test('click action: user can login with valid credentials', async ({ page }) => {
  10  | 
> 11  |     await page.getByRole('textbox', { name: 'Email', exact: true }).fill('user@test.com');
      |                                                                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12  |     await page.getByRole('textbox', { name: 'Password', exact: true }).fill('123456');
  13  |     await page.getByRole('button', { name: 'Login' }).click();
  14  | 
  15  |     await expect(page.getByRole('status').first()).toHaveText('Login successful');
  16  |   });
  17  | 
  18  |   test('fill, type with delay, clear, select, check, uncheck, upload and submit form', async ({ page }) => {
  19  |     await page.getByLabel('Full Name').fill(' ');
  20  | 
  21  |     await page.getByLabel('Contact Email').type('deepak@test.com', { delay: 50 });
  22  |     await expect(page.getByLabel('Contact Email')).toHaveValue('deepak@test.com');
  23  | 
  24  |     await page.getByLabel('Contact Email').clear();
  25  |     await page.getByLabel('Contact Email').fill('trainer@test.com');
  26  | 
  27  |     await page.locator('#country').selectOption('India');
  28  |     await expect(page.locator('#country')).toHaveValue('India');
  29  | 
  30  |     await page.getByLabel('Playwright').check();
  31  |     await expect(page.getByLabel('Playwright')).toBeChecked();
  32  | 
  33  |     await page.getByLabel('TypeScript').check();
  34  |     await page.getByLabel('TypeScript').uncheck();
  35  |     await expect(page.getByLabel('TypeScript')).not.toBeChecked();
  36  | 
  37  |     await page.getByLabel('Accept Terms').check();
  38  |     await expect(page.getByLabel('Accept Terms')).toBeChecked();
  39  | 
  40  |     const filePath = path.join(process.cwd(), 'uploads', 'sample-file.txt');
  41  |     await page.setInputFiles('#profile-file', filePath);
  42  |     await expect(page.locator('#upload-message')).toHaveText('Uploaded: sample-file.txt');
  43  | 
  44  |     await page.getByRole('button', { name: 'Submit Form' }).click();
  45  |     await expect(page.locator('#form-message')).toHaveText('Form submitted successfully');
  46  |   });
  47  | 
  48  |   test('keyboard action: press Enter after typing search text', async ({ page }) => {
  49  |     await page.getByPlaceholder('Search').fill('Playwright Actions');
  50  |     await page.keyboard.press('Enter');
  51  | 
  52  |     await expect(page.locator('#search-result')).toHaveText('Search executed for: Playwright Actions');
  53  |   });
  54  | 
  55  |   test('hover action: menu panel becomes visible', async ({ page }) => {
  56  |     await page.locator('#menu').hover();
  57  | 
  58  |     await expect(page.locator('#menu-panel')).toBeVisible();
  59  |     await expect(page.locator('#menu-panel')).toContainText('Dashboard');
  60  |   });
  61  | 
  62  |   test('drag and drop action: source item is dropped into target', async ({ page }) => {
  63  |     await page.dragAndDrop('#source', '#target');
  64  | 
  65  |     await expect(page.locator('#target')).toHaveText('Dropped Successfully');
  66  |     await expect(page.locator('#drag-message')).toHaveText('Drag and drop completed');
  67  |   });
  68  | 
  69  |   test('double click and right click actions', async ({ page }) => {
  70  |     await page.locator('#double-click-button').dblclick();
  71  |     await expect(page.locator('#double-click-message')).toHaveText('Double click completed');
  72  | 
  73  |     await page.locator('#right-click-box').click({ button: 'right' });
  74  |     await expect(page.locator('#right-click-message')).toHaveText('Right click completed');
  75  |   });
  76  | 
  77  |   test('focus and clear actions on notes input', async ({ page }) => {
  78  |     const notes = page.locator('#notes');
  79  | 
  80  |     await notes.focus();
  81  |     await expect(page.locator('#focus-message')).toHaveText('Notes input focused');
  82  | 
  83  |     await notes.clear();
  84  |     await expect(notes).toHaveValue('');
  85  | 
  86  |     await notes.fill('New note added by Playwright');
  87  |     await expect(notes).toHaveValue('New note added by Playwright');
  88  |   });
  89  | 
  90  |   test('scroll action: user can scroll to lower section', async ({ page }) => {
  91  |     const scrollSection = page.locator('#scroll-section');
  92  | 
  93  |     await scrollSection.scrollIntoViewIfNeeded();
  94  | 
  95  |     await expect(scrollSection).toBeInViewport();
  96  |     await expect(page.locator('#scroll-message')).toHaveText('You reached the scroll section.');
  97  |   });
  98  | 
  99  |   test('force click demo: visually covered button can be clicked with force option', async ({ page }) => {
  100 |     await page.locator('#covered-button').click({ force: true });
  101 | 
  102 |     await expect(page.locator('#covered-message')).toHaveText('Covered button clicked using force');
  103 |   });
  104 | });
  105 | 
```