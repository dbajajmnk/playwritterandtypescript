Perfect—this is where Playwright becomes **real automation**, not just theory. Let’s break **Actions** using your locked deep template so you can *teach + implement + debug* confidently.

---

# 🎯 Playwright Actions (User Interaction Layer)

---

# 1️⃣ WHAT

**Actions** are operations performed on web elements:

* Click
* Type
* Select
* Hover
* Drag & Drop

👉 They simulate **real user behavior**.

---

# 2️⃣ WHY

Without actions:

* You can’t interact with UI ❌
* Tests become static ❌

With actions:

* Real user simulation ✅
* End-to-end testing ✅
* Full workflow validation ✅

---

# 3️⃣ WHEN

Use actions:

* Filling forms
* Clicking buttons
* Navigating flows
* Testing UI behavior

---

# 4️⃣ HOW (Execution Flow)

```text id="c8k3rm"
Locator → Auto-wait → Action → DOM Update → Assertion
```

---

# 5️⃣ REAL-LIFE ANALOGY

---

## 🧑‍💻 Using a Website

* You click → Playwright clicks
* You type → Playwright types
* You select → Playwright selects

👉 Playwright = your **digital hands**

---

# 6️⃣ ENGINEERING VIEW

---

## 🔹 Action = Locator + Operation

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

👉 Combines:

* Locator
* Auto-wait
* Execution

---

# 7️⃣ CORE ACTIONS (MOST IMPORTANT)

---

## ✅ 1. CLICK

```ts
await page.getByRole('button', { name: 'Login' }).click();
```

---

## ✅ 2. TYPE (fill)

```ts
await page.getByLabel('Email').fill('test@test.com');
```

---

## ✅ 3. TYPE WITH DELAY (simulate real user)

```ts
await page.getByLabel('Email').type('test@test.com', { delay: 100 });
```

---

## ✅ 4. CLEAR INPUT

```ts
await page.getByLabel('Email').clear();
```

---

## ✅ 5. SELECT DROPDOWN

```ts
await page.locator('#country').selectOption('India');
```

---

## ✅ 6. CHECK / UNCHECK

```ts
await page.getByLabel('Accept Terms').check();
await page.getByLabel('Accept Terms').uncheck();
```

---

## ✅ 7. HOVER

```ts
await page.locator('.menu').hover();
```

---

## ✅ 8. DRAG & DROP

```ts
await page.dragAndDrop('#source', '#target');
```

---

## ✅ 9. PRESS KEY

```ts
await page.keyboard.press('Enter');
```

---

## ✅ 🔟 UPLOAD FILE

```ts
await page.setInputFiles('#upload', 'file.pdf');
```

---

# 🧠 8️⃣ AUTO-WAITING (CRITICAL)

---

Before action, Playwright ensures:

* Element exists
* Element is visible
* Element is stable
* Element is clickable

👉 No need for:

```ts
waitForTimeout ❌
```

---

# 9️⃣ REAL-WORLD USE CASE

---

## 🧪 Login Flow

```ts
await page.goto('https://example.com');

await page.getByLabel('Email').fill('user@test.com');
await page.getByLabel('Password').fill('123456');

await page.getByRole('button', { name: 'Login' }).click();
```

---

## 🧪 Search Flow

```ts
await page.getByPlaceholder('Search').fill('Playwright');
await page.keyboard.press('Enter');
```

---

# 🔟 ADVANCED ACTIONS

---

## 🔹 Force Click (Use carefully)

```ts
await page.locator('#hidden-btn').click({ force: true });
```

👉 Bypasses visibility checks

---

## 🔹 Double Click

```ts
await page.locator('.item').dblclick();
```

---

## 🔹 Right Click

```ts
await page.locator('.item').click({ button: 'right' });
```

---

## 🔹 Scroll

```ts
await page.mouse.wheel(0, 500);
```

---

## 🔹 Focus

```ts
await page.locator('#input').focus();
```

---

# ⚠️ 1️⃣1️⃣ COMMON MISTAKES

---

❌ Using `waitForTimeout`
❌ Clicking without proper locator
❌ Using `force: true` unnecessarily
❌ Not waiting for navigation
❌ Hardcoding delays

---

# 🧠 1️⃣2️⃣ DEEP CONCEPTS

---

## 🔥 Actionability Checks

Before performing action, Playwright verifies:

* Visible
* Enabled
* Stable
* Receives events

---

## 🔥 Atomic Execution

Each action is:

* Retryable
* Safe
* Isolated

---

## 🔥 Locator + Action = Stability

Bad:

```ts
await page.click('div:nth-child(3)');
```

Good:

```ts
await page.getByRole('button', { name: 'Submit' }).click();
```

---

# 🧪 1️⃣3️⃣ PRACTICE TASKS

---

## Task 1

* Click login button

---

## Task 2

* Fill form fields

---

## Task 3

* Select dropdown value

---

## Task 4

* Upload file

---

# 🚀 1️⃣4️⃣ MINI PROJECT

---

## Build: Complete Form Automation

Steps:

* Fill form
* Select options
* Upload file
* Submit form
* Validate success

---

# 🎯 1️⃣5️⃣ INTERVIEW NOTES

---

* Actions are **auto-waiting**
* No need for explicit waits
* Supports keyboard, mouse, file upload
* Built on locator system
* Reliable and retryable

---

# 📌 1️⃣6️⃣ SUMMARY

---

* Actions = user interactions
* Built on locators
* Auto-wait ensures stability
* Avoid force & timeouts

---


