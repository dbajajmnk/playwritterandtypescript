# 📘 Events in JavaScript (click, submit) 

---

## 1️⃣ What

### ✅ Definition

Events are actions or occurrences that happen in the browser (like clicking a button, submitting a form, typing, scrolling), which JavaScript can listen to and respond to.

---

## 2️⃣ Why

### 🎯 Purpose

* To make web pages **interactive**
* To respond to **user actions**
* To trigger **logic dynamically**

👉 Without events → Web pages are **static**
👉 With events → Web pages become **interactive systems**

---

## 3️⃣ When

### ⏰ Use Events When:

* User clicks a button → `click`
* User submits a form → `submit`
* User types in input → `input`
* Page loads → `load`

---

## 4️⃣ How

### ⚙️ Basic Working Flow

```
User Action → Event Triggered → Event Listener → Function Executes → UI Update
```

---

## 🌍 Real-Life Mind Mapping Analogy

### 🏠 Doorbell System

* Visitor presses bell → (Event Trigger)
* Bell rings → (Event detected)
* You open door → (Event handler)

👉 Browser works same way:

* User clicks → Event fires → JS handles it

---

## 🧠 Engineering View

### Core Concepts:

* **Event Target** → Element (button, form)
* **Event Type** → click, submit
* **Event Listener** → Function waiting for event
* **Event Handler** → Function executed

---

## 🧾 Syntax

### 1️⃣ Click Event

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

---

### 2️⃣ Submit Event

```javascript
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops page reload
  console.log("Form submitted!");
});
```

---

## 🔥 Real-World Use Cases

### 1. Login Button Click

```javascript
loginBtn.addEventListener("click", loginUser);
```

### 2. Form Validation

```javascript
form.addEventListener("submit", validateForm);
```

### 3. Add to Cart

```javascript
cartBtn.addEventListener("click", addToCart);
```

### 4. Search Input

```javascript
searchInput.addEventListener("input", searchItems);
```

---

## ⚠️ Common Mistakes

### ❌ 1. Forgetting `event.preventDefault()`

→ Page reloads unexpectedly

### ❌ 2. Using inline JS

```html
<button onclick="doSomething()">
```

👉 Not scalable

### ❌ 3. Adding multiple listeners unnecessarily

### ❌ 4. Not removing listeners (memory issues)

---

## 🔍 Deep Concepts

### 1️⃣ Event Bubbling

* Event travels **child → parent**

```javascript
div.addEventListener("click", () => console.log("DIV"));
button.addEventListener("click", () => console.log("BUTTON"));
```

👉 Clicking button logs:

```
BUTTON
DIV
```

---

### 2️⃣ Event Capturing

* Event travels **parent → child**

```javascript
div.addEventListener("click", handler, true);
```

---

### 3️⃣ Event Object

```javascript
button.addEventListener("click", function(event) {
  console.log(event.target);
});
```

---

### 4️⃣ Event Delegation

👉 Handle events at parent level

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked");
  }
});
```

---

## 🧠 Knowledge Check – MCQs

### Q1. What triggers an event?

A. CSS
B. User action
C. HTML
D. Server

---

### Q2. Which method is used to attach events?

A. attachEvent
B. addEventListener
C. bindEvent
D. setEvent

---

### Q3. What does `submit` event belong to?

A. Button
B. Form
C. Div
D. Span

---

### Q4. Why use `preventDefault()`?

A. Stop execution
B. Stop default browser behavior
C. Stop JS
D. Stop CSS

---

### Q5. Event bubbling means?

A. Parent → Child
B. Child → Parent
C. Random
D. None

---

## ✅ MCQ Answers

1 → B
2 → B
3 → B
4 → B
5 → B

---

## 📝 Subjective Questions

1. What are events in JavaScript?
2. Difference between click and submit events
3. Explain event bubbling
4. What is event delegation?
5. Why preventDefault is important?

---

## ✅ Subjective Answers

### 1.

Events are user or system actions detected by browser.

### 2.

Click → triggered on button press
Submit → triggered when form is submitted

### 3.

Event bubbling is propagation from child to parent.

### 4.

Handling events at parent instead of multiple children.

### 5.

Prevents default browser actions like reload.

---

## 🧪 Practical Assignments

### Assignment 1

Create a button → show alert on click

### Assignment 2

Create form → prevent reload and log data

### Assignment 3

Create list → use event delegation

---

## 🚀 Mini Project

### 🛒 Online Boutique Form System

👉 Build:

* Add to Cart button (click event)
* Checkout form (submit event)
* Validate input
* Show success message

---

## 🎯 Interview Notes

* Events = Core of frontend interactivity
* addEventListener is standard
* Understand bubbling & delegation
* preventDefault is must for forms

---

## 🧾 Summary

* Events = User interactions
* click & submit are most used
* Event flow is important (bubbling)
* Proper handling improves performance


