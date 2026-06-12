# Playwright Assertions Practice Project

This is a beginner-friendly Playwright + TypeScript practice project for the topic:

**Playwright Basic - 6. Assertions**

The project includes a local sample testing website and automated Playwright tests.

---

## 1. What This Project Covers

This project covers the main assertion scenarios from the Assertions lesson:

- Page title assertion
- URL assertion
- Visible assertion
- Hidden assertion
- Attached-to-DOM assertion
- Enabled assertion
- Disabled assertion
- Checked assertion
- Empty assertion
- Focused assertion
- Text assertion
- Contains text assertion
- Input value assertion
- Count assertion
- Attribute assertion
- Class assertion
- JavaScript value assertion
- Auto-retrying assertion using unique test id locator
- Soft assertion
- Real login flow assertion
- Search assertion
- Add-to-cart assertion
- Form validation assertion
- Role-based UI assertion

---

## 2. Project Structure

```text
playwright-assertions-practice/
  sample-site/
    index.html
    styles.css
    app.js
    server.js

  tests/
    assertions.spec.ts

  package.json
  playwright.config.ts
  tsconfig.json
  README.md
```

---

## 3. Installation

Open terminal in the project folder and run:

```bash
npm install
npx playwright install
```

---

## 4. Run Tests

```bash
npm run test
```

Run tests in visible browser mode:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open HTML report:

```bash
npm run report
```

---

## 5. Sample Website URL

The sample website runs locally through Playwright webServer:

```text
http://127.0.0.1:3000
```

You do not need to start it manually when running tests. Playwright starts it automatically.

To manually open the sample website:

```bash
npm run start
```

Then open:

```text
http://127.0.0.1:3000/login
```

---

## 6. Demo Login Credentials

```text
Email: user@test.com
Password: 123456
```

---

## 7. Important Teaching Notes

### Action Vs Assertion

```text
Action means doing something.
Assertion means checking whether the result is correct.
```

Example:

```ts
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);
```

The click is the action.
The URL check is the assertion.

---

## 8. Why This Project Is Useful

This project helps students understand that a test is not complete just because it clicks, types, or navigates.

A strong test must verify the result.

Example:

```text
Bad Test:
Click Login

Good Test:
Click Login
Check URL
Check Welcome Message
Check Dashboard Visibility
```

---

## 9. Notes For Trainers

Recommended teaching flow:

1. Explain why assertions are needed.
2. Open the sample website manually.
3. Show each UI area.
4. Run one test at a time.
5. Break one expected value intentionally.
6. Show how Playwright reports assertion failures.
7. Explain auto-retry assertions.
8. Explain hard vs soft assertions.

Run a specific test:

```bash
npx playwright test -g "real login flow"
```

---

## 10. Common Mistakes Covered

- Writing actions without assertions
- Using weak locators
- Using manual wait instead of auto-retrying assertions
- Confusing `toHaveText()` with `toContainText()`
- Forgetting to check URL after navigation
- Forgetting to check form validation messages
- Expecting a button to be enabled before required input is completed

---

## 11. Expected Result

After running:

```bash
npm run test
```

All tests should pass.
