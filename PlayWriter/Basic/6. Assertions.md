Absolutely—**Assertions** are the **proof layer** of automation.

Without assertions, Playwright can perform actions, but it cannot prove whether the application behaved correctly. This topic is essential for both teaching and real project work.

---

# Playwright Assertions

---

## 1) What

**Assertions** are checks that verify whether the actual result matches the expected result.

They answer questions like:

* Did login succeed?
* Is the button visible?
* Did the page title change?
* Is the error message shown?
* Does the input contain the correct value?

In simple words:

**Actions do something. Assertions confirm something.**

---

## 2) Why

If a test only clicks and types but never checks outcomes, then the test is weak.

### Without assertions

* Test runs but proves nothing
* Bugs can still pass silently
* False confidence increases

### With assertions

* Behavior is validated
* Failures are meaningful
* Test quality improves
* Debugging becomes easier

---

## 3) When

Use assertions:

* After an action
* After navigation
* After form submission
* After API-triggered UI update
* Whenever expected behavior must be verified

Typical examples:

* After clicking **Login**, verify dashboard is visible
* After filling a form, verify success message appears
* After deleting an item, verify it is removed from the list

---

## 4) How

Execution flow:

```text
Action → Application Response → Assertion → Pass / Fail
```

Example thinking:

```text
Click Login → App processes credentials → Dashboard appears → Assert dashboard is visible
```

---

## 5) Real-Life Analogy

Think about a student exam.

* Writing answers = action
* Checking marks/result = assertion

Or food delivery:

* You placed the order = action
* You received the correct food = assertion

So in testing:

* Clicking is not success
* Typing is not success
* **Verified result is success**

---

## 6) Engineering View

Assertions are the **validation contract** between expected behavior and actual behavior.

In Playwright, assertions are usually written with:

```ts
expect(...)
```

Playwright assertions are powerful because many of them are **auto-retrying**.

That means Playwright does not fail immediately. It waits for a short time for the expected condition to become true.

This is a major reason Playwright tests are more stable than traditional automation.

---

## 7) Basic Syntax

```ts
import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

Structure:

```ts
await expect(target).matcher(expectedValue);
```

---

## 8) Main Assertion Types

---

### A) Page Assertions

Used to validate the whole page.

#### Example: title

```ts
await expect(page).toHaveTitle('My App');
```

#### Example: partial title using regex

```ts
await expect(page).toHaveTitle(/My App/);
```

#### Example: URL

```ts
await expect(page).toHaveURL('https://example.com/dashboard');
```

#### Partial URL

```ts
await expect(page).toHaveURL(/dashboard/);
```

### Use case

After login, verify user reached the dashboard page.

```ts
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);
```

---

### B) Locator Assertions

These are the most common assertions in UI automation.

They validate specific elements.

#### Visible

```ts
await expect(page.getByText('Welcome')).toBeVisible();
```

#### Hidden

```ts
await expect(page.getByText('Loading')).toBeHidden();
```

#### Attached to DOM

```ts
await expect(page.locator('#user-card')).toBeAttached();
```

#### Enabled

```ts
await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
```

#### Disabled

```ts
await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
```

#### Checked

```ts
await expect(page.getByLabel('Accept Terms')).toBeChecked();
```

#### Empty

```ts
await expect(page.locator('.cart-items')).toBeEmpty();
```

#### Focused

```ts
await expect(page.getByLabel('Email')).toBeFocused();
```

---

### C) Text Assertions

These verify text content.

#### Exact or contains text

```ts
await expect(page.getByTestId('success-msg')).toHaveText('Login successful');
```

```ts
await expect(page.getByTestId('success-msg')).toContainText('successful');
```

### Difference

* `toHaveText()` checks full text more strictly
* `toContainText()` checks partial text

### Use case

Error banner after invalid login:

```ts
await expect(page.getByRole('alert')).toContainText('Invalid credentials');
```

---

### D) Input Assertions

Used for form fields.

#### Input value

```ts
await expect(page.getByLabel('Email')).toHaveValue('user@test.com');
```

### Use case

Autofilled email should be correct.

```ts
await expect(page.getByLabel('Email')).toHaveValue('admin@test.com');
```

---

### E) Count Assertions

Useful when checking lists, tables, cards, rows.

```ts
await expect(page.locator('.product-card')).toHaveCount(6);
```

### Use case

After adding one item, cart count becomes 1.

```ts
await expect(page.locator('.cart-item')).toHaveCount(1);
```

---

### F) Attribute Assertions

Checks HTML attributes.

```ts
await expect(page.locator('#email')).toHaveAttribute('type', 'email');
```

### Use case

Verify a link points to correct route.

```ts
await expect(page.getByRole('link', { name: 'Profile' }))
  .toHaveAttribute('href', '/profile');
```

---

### G) Class Assertions

```ts
await expect(page.locator('.toast')).toHaveClass(/success/);
```

### Use case

Check whether success styling is applied.

---

### H) JavaScript Value Assertions

These are generic assertions.

```ts
expect(5 + 5).toBe(10);
expect('playwright').toContain('wright');
expect(true).toBeTruthy();
expect(null).toBeNull();
```

These are useful for:

* API response values
* variables
* computed results
* helper function output

---

## 9) Real Example

### Login success flow

```ts
import { test, expect } from '@playwright/test';

test('user can login successfully', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByLabel('Email').fill('user@test.com');
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByText('Welcome')).toBeVisible();
});
```

### Thinking flow

* Fill credentials
* Click login
* Verify new page loaded
* Verify welcome content is visible

That is a complete test.

---

## 10) Auto-Retrying Assertions

This is one of Playwright’s strongest features.

When you write:

```ts
await expect(page.getByText('Saved')).toBeVisible();
```

Playwright does not fail instantly if the text is not visible at that exact moment.

It retries for a timeout period, waiting for the condition to become true.

### Why this matters

Modern web apps are dynamic:

* data loads late
* animations happen
* network responses take time
* rendering may be delayed

Auto-retry makes tests more realistic and stable.

---

## 11) Hard Assertions vs Soft Assertions

### Hard Assertion

Stops the test immediately if it fails.

```ts
await expect(page.getByText('Success')).toBeVisible();
```

If this fails, test execution stops there.

---

### Soft Assertion

Records failure but continues execution.

```ts
await expect.soft(page.getByText('Success')).toBeVisible();
```

### When soft assertions help

When you want to validate multiple UI pieces in one run, such as:

* title
* subtitle
* icon
* CTA button

Example:

```ts
await expect.soft(page.getByText('Profile')).toBeVisible();
await expect.soft(page.getByText('Settings')).toBeVisible();
await expect.soft(page.getByRole('button', { name: 'Save' })).toBeVisible();
```

This gives a broader failure report.

---

## 12) Commonly Used Assertions Cheat Sheet

```ts
await expect(page).toHaveTitle(/Dashboard/);
await expect(page).toHaveURL(/dashboard/);

await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).toBeEmpty();
await expect(locator).toHaveText('Hello');
await expect(locator).toContainText('Hell');
await expect(locator).toHaveValue('abc');
await expect(locator).toHaveCount(3);
await expect(locator).toHaveAttribute('href', '/home');
await expect(locator).toHaveClass(/active/);
```

---

## 13) Real-World Use Cases

### Use Case 1: Login

Assert:

* URL changed
* dashboard text visible

### Use Case 2: Search

Assert:

* results list visible
* number of items greater than zero

### Use Case 3: Add to Cart

Assert:

* cart badge shows 1
* item row appears in cart

### Use Case 4: Form Validation

Assert:

* error message visible
* submit button still disabled

### Use Case 5: Role-based UI

Assert:

* admin panel visible for admin
* hidden for regular user

---

## 14) Common Mistakes

### Mistake 1: No assertion after action

Bad:

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

Problem: what was validated?

Better:

```ts
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);
```

---

### Mistake 2: Using manual waits before assertion

Bad:

```ts
await page.waitForTimeout(5000);
await expect(page.getByText('Saved')).toBeVisible();
```

Problem:

* slow
* fragile
* unnecessary

Better:

```ts
await expect(page.getByText('Saved')).toBeVisible();
```

---

### Mistake 3: Asserting weak or unstable text

Bad:

```ts
await expect(page.locator('div:nth-child(4)')).toHaveText('Done');
```

Better:

```ts
await expect(page.getByRole('status')).toContainText('Done');
```

---

### Mistake 4: Overchecking everything in one test

Too many unrelated assertions make debugging harder.

Keep assertions aligned with one clear test purpose.

---

### Mistake 5: Asserting implementation details instead of behavior

Bad:

* checking internal CSS structure unnecessarily

Better:

* checking what user actually sees and experiences

---

## 15) Deep Concepts

### A) Assertion is business validation

Do not think only in technical terms.

Think like this:

* Business says successful login should open dashboard
* Assertion should verify dashboard

---

### B) Good test = action + assertion pairing

Every important action should usually lead to meaningful validation.

Example:

* Click submit → assert success
* Search product → assert results
* Delete item → assert item removed

---

### C) Assertion target should be stable

Prefer:

* role
* label
* test id
* meaningful text

Avoid unstable selectors.

---

### D) Assert user outcome, not incidental DOM noise

Best assertion:

```ts
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
```

Less useful assertion:

```ts
await expect(page.locator('.container > div:nth-child(2)')).toHaveClass('loaded');
```

---

## 16) Practice Tasks

### Task 1

Open a page and assert the title.

### Task 2

Fill an input and assert its value.

### Task 3

Click a login button and assert URL contains `dashboard`.

### Task 4

Validate an error message after wrong password.

### Task 5

Assert a checkbox becomes checked after clicking.

---

## 17) Mini Project

### Build: Login Validation Suite

Create tests for:

* valid login
* invalid login
* empty form submission
* password required
* remember me checkbox

Assertions should verify:

* URL
* visible messages
* button state
* field value
* checkbox state

---

## 18) Interview Notes

* Assertions validate expected behavior
* Playwright assertions are auto-retrying
* `expect(locator)` is most common in UI tests
* Prefer validating visible user outcomes
* Avoid manual waits before assertions
* Good automation is not action-only, it is action plus proof

---

## 19) Summary

* Assertions are the validation layer of testing
* They prove the app behaved correctly
* Playwright provides smart, auto-waiting assertions
* Strong assertions make tests reliable and meaningful
* Always verify outcome, not just action

---

## 20) Quick Code Bundle

```ts
import { test, expect } from '@playwright/test';

test('assertion examples', async ({ page }) => {
  await page.goto('https://example.com/login');

  await expect(page).toHaveTitle(/Example/);

  await page.getByLabel('Email').fill('user@test.com');
  await expect(page.getByLabel('Email')).toHaveValue('user@test.com');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard|login/);
});
```


