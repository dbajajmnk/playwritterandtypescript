# 🧩 Fixtures & Hooks (Playwright)

## 1. WHAT (Simple Definition)

* **Fixtures** → Provide **pre-configured setup (objects, data, environment)** to your tests
* **Hooks** → Define **when to run setup/cleanup logic** (before/after tests)

👉 Think:

* Fixtures = *What you need*
* Hooks = *When you prepare/clean it*

---

## 2. WHY (Engineering Need)

Without fixtures & hooks:

* Repeated login code ❌
* Manual setup in every test ❌
* Hard to maintain ❌

With fixtures & hooks:

* Reusable setup ✅
* Clean tests ✅
* Better scalability ✅

---

## 3. REAL-LIFE ANALOGY 🏨

Imagine a hotel:

* **Fixtures** → Room, bed, WiFi (already prepared)
* **Hooks** → Cleaning before check-in & after checkout

👉 You don’t set up the room every time — it’s already ready.

---

## 4. ENGINEERING CONCEPT

### Fixtures = Dependency Injection

* Inject ready-to-use objects into tests
* Example: `page`, `browser`, `context`

### Hooks = Lifecycle Management

* Control execution flow:

  * Before test
  * After test
  * Before all
  * After all

---

# ⚙️ 5. FIXTURES IN PLAYWRIGHT

## Built-in Fixtures

Playwright provides:

```ts
test('example test', async ({ page }) => {
  await page.goto('https://example.com');
});
```

👉 Here:

* `page` = fixture
* Automatically created & destroyed

---

## Custom Fixtures (Advanced)

```ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('https://app.com/login');
    await page.fill('#user', 'admin');
    await page.fill('#pass', 'password');
    await page.click('#login');

    await use(page); // pass to test
  },
});
```

### Usage:

```ts
test('dashboard test', async ({ loggedInPage }) => {
  await loggedInPage.click('#dashboard');
});
```

---

## 🔑 Key Concepts

| Concept   | Meaning                    |
| --------- | -------------------------- |
| `use()`   | Pass fixture to test       |
| Scope     | test / worker              |
| Isolation | Each test gets fresh state |

---

# 🔁 6. HOOKS IN PLAYWRIGHT

## Available Hooks

```ts
test.beforeEach(async ({ page }) => {
  console.log('Before each test');
});

test.afterEach(async ({ page }) => {
  console.log('After each test');
});

test.beforeAll(async () => {
  console.log('Run once before all tests');
});

test.afterAll(async () => {
  console.log('Run once after all tests');
});
```

---

## 🔄 Execution Flow

```
beforeAll
  beforeEach
    test 1
  afterEach

  beforeEach
    test 2
  afterEach

afterAll
```

---

# 🧠 7. FIXTURES vs HOOKS (Important Interview)

| Feature     | Fixtures               | Hooks                    |
| ----------- | ---------------------- | ------------------------ |
| Purpose     | Provide data/resources | Control execution timing |
| Reusability | High                   | Medium                   |
| Injection   | Yes                    | No                       |
| Use case    | Login session, DB      | Setup/cleanup            |

---

# 💥 8. REAL USE CASE (Login Optimization)

## ❌ Without Fixture

```ts
test('test1', async ({ page }) => {
  await login(page);
});

test('test2', async ({ page }) => {
  await login(page);
});
```

---

## ✅ With Fixture

```ts
test('test1', async ({ loggedInPage }) => {});
test('test2', async ({ loggedInPage }) => {});
```

👉 Cleaner + reusable

---

# ⚠️ 9. COMMON MISTAKES

❌ Using hooks for everything
👉 Use fixtures for reusable logic

❌ Not using `use()` in custom fixture
👉 Test won’t receive data

❌ Sharing state between tests
👉 Breaks isolation

❌ Heavy logic in `beforeEach`
👉 Slows down tests

---

# 🧪 10. PRACTICE TASKS

### Task 1

Create a fixture for:

* Logged-in user

### Task 2

Use `beforeEach` to:

* Navigate to homepage

### Task 3

Use `afterEach` to:

* Take screenshot on failure

---

# 🚀 11. MINI PROJECT IDEA

👉 Build a **Test Suite for E-commerce**

* Fixture:

  * loggedInUser
  * productPage

* Hooks:

  * beforeEach → open homepage
  * afterEach → clear cart

---

# 🎯 12. INTERVIEW NOTES

* Fixtures = dependency injection
* Hooks = lifecycle control
* Prefer fixtures over hooks for reusable logic
* Always maintain test isolation

---

# 🔥 FINAL SUMMARY

* Fixtures → Provide ready objects (page, login session)
* Hooks → Control execution flow (before/after)
* Use both together for scalable automation


