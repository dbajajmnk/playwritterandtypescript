# 📘 JavaScript Fundamentals — Variables, Data Types & Functions

---

# 1️⃣ VARIABLES

---

## 🔹 What is a Variable?

A **variable** is a container used to store data that can be used and modified later in a program.

```js
let name = "Deepak";
```

---

## 🔹 Why do we need Variables?

Without variables:

* You cannot store user input
* You cannot reuse values
* You cannot build dynamic applications

👉 Variables make programs **dynamic instead of static**

---

## 🔹 When to use Variables?

Use variables when:

* storing user data (name, email)
* storing API responses
* storing temporary calculations
* managing state in UI

---

## 🔹 How Variables Work?

```js
let age = 25;
age = 26;
```

* `let` → can be changed
* `const` → cannot be changed
* `var` → old (avoid in modern JS)

---

## 🔹 Real-Life Analogy

Think of a **variable like a labeled box**

* Box name = variable name
* Inside item = value

You can:

* replace item (let)
* lock item (const)

---

## 🔹 Engineering View

Variable = **memory reference in RAM**

```text
age → memory address → 25
```

---

## 🔹 Syntax

```js
let a = 10;
const PI = 3.14;
var oldWay = "avoid";
```

---

## 🔹 Real-World Use Cases

### 1. User Profile

```js
let username = "Deepak";
let isLoggedIn = true;
```

### 2. API Data

```js
let users = fetch("/api/users");
```

### 3. Shopping Cart

```js
let totalPrice = 999;
```

---

## 🔹 Common Mistakes

❌ Using `var`
❌ Reassigning `const`
❌ Not initializing variables

---

## 🔹 Practice

1. Store your name, age, and city
2. Create a cart total variable
3. Change values dynamically

---

# 2️⃣ DATA TYPES

---

## 🔹 What are Data Types?

Data types define **what kind of data a variable can hold**

---

## 🔹 Types in JavaScript

### Primitive Types

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol

### Non-Primitive

* Object
* Array
* Function

---

## 🔹 Why Data Types?

* Ensure correct operations
* Prevent bugs
* Optimize memory

---

## 🔹 Real-Life Analogy

Data types = **different containers**

* Water bottle → liquid
* Box → solid
* File → document

Each holds specific type of content

---

## 🔹 Engineering View

JS is **dynamically typed**, but engine tracks type internally.

---

## 🔹 Syntax Examples

```js
let name = "Deepak";     // string
let age = 25;            // number
let isActive = true;     // boolean
let data = null;         // null
let value;               // undefined
```

---

## 🔹 Complex Types

```js
let user = {
  name: "Deepak",
  age: 25
};

let arr = [1, 2, 3];
```

---

## 🔹 Real-World Use Cases

### 1. API Response

```js
let response = {
  status: 200,
  data: ["user1", "user2"]
};
```

### 2. Form Validation

```js
let isValid = true;
```

### 3. E-commerce Product

```js
let product = {
  name: "Shoes",
  price: 999
};
```

---

## 🔹 Common Mistakes

❌ `"5" + 2 = "52"` (string concatenation)
❌ `null vs undefined confusion`
❌ treating arrays as objects incorrectly

---

## 🔹 Practice

1. Create object for user
2. Create array of products
3. Try type conversion

---

# 3️⃣ FUNCTIONS

---

## 🔹 What is a Function?

A function is a **reusable block of code** that performs a task.

---

## 🔹 Why Functions?

* Avoid code duplication
* Improve readability
* Enable modular design

---

## 🔹 When to Use Functions?

Use functions when:

* logic repeats
* handling events
* API calls
* validations

---

## 🔹 How Functions Work?

```js
function greet() {
  console.log("Hello");
}

greet();
```

---

## 🔹 Real-Life Analogy

Function = **machine**

* Input → processing → output

Example:
ATM → insert card → get money

---

## 🔹 Engineering View

Function = **callable block stored in memory**

---

## 🔹 Syntax Types

### 1. Normal Function

```js
function add(a, b) {
  return a + b;
}
```

### 2. Arrow Function

```js
const add = (a, b) => a + b;
```

### 3. Anonymous Function

```js
setTimeout(function() {
  console.log("Hi");
}, 1000);
```

---

## 🔹 Parameters Deep Dive

### Required

```js
function sum(a, b) {}
```

### Default

```js
function sum(a = 0, b = 0) {}
```

### Optional

```js
function greet(name = "Guest") {}
```

### Callback (Function as parameter)

```js
function process(callback) {
  callback();

}
```

---

## 🔹 Real-World Use Cases

### 1. API Call

```js
async function getUsers() {
  let res = await fetch("/api/users");
  return res.json();
}
```

---

### 2. Form Validation

```js
function validateEmail(email) {
  return email.includes("@");
}
```

---

### 3. Event Handling

```js
button.addEventListener("click", function() {
  console.log("Clicked");
});
```

---

### 4. E-commerce Calculation

```js
function calculateTotal(price, qty) {
  return price * qty;
}
```

---

## 🔹 Common Mistakes

❌ Not returning values
❌ Confusing arrow vs normal function
❌ Missing parameters
❌ Callback misuse

---

## 🔹 Practice

1. Create calculator functions
2. Create validation functions
3. Create API fetch function

---

# 🎯 MINI PROJECT

## Build a Simple Cart System

```js
let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
}

function getTotal() {
  return cart.reduce((sum, i) => sum + i.price, 0);
}

addToCart("Shoes", 1000);
addToCart("Bag", 500);

console.log(getTotal());
```

---

# 🎯 INTERVIEW NOTES

* Difference between `let`, `const`, `var`
* Primitive vs Non-Primitive
* Function vs Arrow Function
* Hoisting basics
* Scope basics

---

# 📌 SUMMARY

* Variables store data
* Data types define nature of data
* Functions execute reusable logic

👉 Together they form the **foundation of all JavaScript applications**


