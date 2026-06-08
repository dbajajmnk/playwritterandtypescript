# Playwright Actions Practice Project

## Goal

This project gives you a complete working Playwright + TypeScript practice setup for the lesson **Playwright Actions (User Interaction Layer)**.

It includes:

- A local sample testing website.
- Playwright test cases for common user actions.
- Practice scenarios aligned with the Actions topic.

## Covered Scenarios

| Scenario | Playwright Action |
|---|---|
| Login Button | `click()` |
| Text Input | `fill()` |
| Real User Typing | `type({ delay })` |
| Clear Input | `clear()` |
| Country Dropdown | `selectOption()` |
| Terms And Skills | `check()` / `uncheck()` |
| Hover Menu | `hover()` |
| Drag Card To Target | `dragAndDrop()` |
| Search With Enter | `keyboard.press('Enter')` |
| File Upload | `setInputFiles()` |
| Double Click | `dblclick()` |
| Right Click | `click({ button: 'right' })` |
| Scroll Page | `mouse.wheel()` |
| Focus Input | `focus()` |
| Covered Button | `click({ force: true })` |

## Folder Structure

```text
playwright-actions-practice/
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
├── uploads/
│   └── sample-file.txt
├── sample-site/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── tests/
    └── actions.spec.ts
```

## Setup Commands

Run these commands from the project root folder:

```bash
npm install
npx playwright install
npm test
```

## Run In Headed Mode

```bash
npm run test:headed
```

## Run With Playwright UI Mode

```bash
npm run test:ui
```

## View HTML Report

```bash
npm run report
```

## Teaching Flow

### 1. First Show The Website Manually

The Playwright config automatically starts the local sample website using `node sample-site/server.js`.

### 2. Explain The Action Flow

```text
Locator → Auto-Wait → Action → DOM Update → Assertion
```

### 3. Run One Test At A Time

Example:

```bash
npx playwright test tests/actions.spec.ts -g "click action" --headed
```

### 4. Explain Why Assertions Are Needed

Actions only perform user behavior. Assertions confirm that the expected result happened.

## Important Teaching Notes

- Prefer role, label, placeholder, and stable locators.
- Avoid `waitForTimeout()` in normal cases.
- Use `force: true` only when you intentionally want to bypass Playwright actionability checks.
- Do not hardcode unnecessary delays.
- Always validate the UI result after each important action.

## Mini Project Practice

Ask learners to add one more section to the sample website:

- Radio button selection.
- Date picker input.
- Multi-select dropdown.
- Confirmation modal.

Then ask them to automate it using Playwright.
