# 🧩 Page Object Model (POM)

## 1. WHAT (Simple Definition)

**POM = Design pattern where UI pages are converted into reusable classes**

👉 Instead of writing selectors in tests:

* You create **page classes**
* Encapsulate **locators + actions**

---

## 2. WHY (Engineering Need)

Without POM:

* Duplicate selectors ❌
* Hard maintenance ❌
* Tests tightly coupled to UI ❌

With POM:

* Clean tests ✅
* Reusable code ✅
* Easy maintenance ✅

---

## 3. REAL-LIFE ANALOGY 🏦

Think of a **Bank App**

* You don’t directly interact with database
* You use a **UI layer (buttons, forms)**

👉 POM = That UI abstraction layer

---

## 4. ENGINEERING CONCEPT

👉 **Abstraction + Encapsulation**

* Hide selectors inside class
* Expose only actions

---

# ⚙️ 5. BASIC POM STRUCTURE

## 📁 Folder Structure

```
/tests
/pages
   LoginPage.ts
   DashboardPage.ts
```

---

## 🧱 Example: Login Page

```ts
// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = '#user';
  password = '#pass';
  loginBtn = '#login';

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}
```

---

## 🧪 Usage in Test

```ts
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('admin', 'password');
});
```

---

# 🔑 6. IMPROVED VERSION (BEST PRACTICE)

👉 Use **Playwright locators instead of strings**

```ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user');
    this.password = page.locator('#pass');
    this.loginBtn = page.locator('#login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
```

---

# 🔄 7. FLOW VISUALIZATION

![Image](https://miro.medium.com/v2/resize%3Afit%3A2000/1%2AUz0xBEbnd7IhEubY392Cow.png)

![Image](https://www.getautonoma.com/_next/image?q=75\&url=%2Fimg%2Fblog%2Fpage-object-model-test-architecture%2Fhero.jpg\&w=1920)

![Image](https://dz2cdn1.dzone.com/storage/temp/17309473-1699278082463.png)

![Image](https://miro.medium.com/1%2AiHA5cL_3Wz08PlfQl5TqBA.png)

👉 Flow:

* Test → Page Object → Browser

---

# 🧠 8. POM vs NORMAL TEST

### ❌ Without POM

```ts
await page.fill('#user', 'admin');
await page.fill('#pass', 'password');
await page.click('#login');
```

---

### ✅ With POM

```ts
await loginPage.login('admin', 'password');
```

👉 Cleaner & reusable

---

# 💥 9. REAL USE CASE (Scaling Project)

Large project:

* 100+ tests
* 20+ pages

👉 Without POM:

* Chaos 😵

👉 With POM:

* Organized structure ✅

---

# ⚠️ 10. COMMON MISTAKES

❌ Putting assertions inside POM
👉 Keep POM for actions only

❌ Hardcoding test data in POM
👉 Pass data from test

❌ One huge page file
👉 Break into smaller components

❌ Not using locators properly
👉 Always prefer `Locator`

---

# 🧪 11. PRACTICE TASKS

### Task 1

Create:

* `SignupPage`

### Task 2

Add methods:

* `enterEmail()`
* `enterPassword()`
* `submitForm()`

### Task 3

Use it in test

---

# 🚀 12. MINI PROJECT IDEA

👉 Build **E-commerce Automation**

Pages:

* HomePage
* ProductPage
* CartPage
* CheckoutPage

---

# 🎯 13. INTERVIEW NOTES

* POM = abstraction layer
* Improves maintainability
* Reduces duplication
* Separates test logic & UI logic

---

# 🔥 14. FINAL SUMMARY

* POM = Page → Class
* Encapsulate locators + actions
* Tests become readable & scalable
* Essential for large automation frameworks

