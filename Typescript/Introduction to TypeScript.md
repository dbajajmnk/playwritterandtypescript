# 📘 Introduction to TypeScript

---

## 1️⃣ What

TypeScript is a **superset of JavaScript** that adds **static typing** and modern features to build scalable applications.

👉 It compiles into plain JavaScript.

---

## 2️⃣ Why

* JavaScript is **dynamic → errors happen at runtime**
* TypeScript catches errors **before running code**
* Improves:

  * Code readability
  * Maintainability
  * Scalability (large apps)

---

## 3️⃣ When

Use TypeScript when:

* Building large applications
* Working in teams
* Writing maintainable code
* Using frameworks like:

  * Angular
  * React (recommended)
  * Node.js backend

---

## 4️⃣ How (Execution Flow)

```
TypeScript Code (.ts)
        ↓
TypeScript Compiler (tsc)
        ↓
JavaScript (.js)
        ↓
Browser / Node.js Execution
```

---

## 5️⃣ Real-Life Analogy (Mind Mapping)

👉 Imagine ordering food:

* JavaScript → “Give me food” ❌ (unclear)
* TypeScript → “1 Veg Pizza, Medium, Extra Cheese” ✅ (clear, structured)

👉 TypeScript ensures:

* Correct order
* No confusion
* Fewer mistakes

---

## 6️⃣ Engineering View

| Concept       | Meaning                        |
| ------------- | ------------------------------ |
| Static Typing | Type checking before execution |
| Compilation   | Converts TS → JS               |
| Type Safety   | Prevents invalid operations    |
| Tooling       | Better IDE support             |

---

## 7️⃣ Syntax (Core Basics)

### ✅ Variable Types

```ts
let name: string = "Deepak";
let age: number = 30;
let isActive: boolean = true;
```

---

### ✅ Arrays

```ts
let numbers: number[] = [1, 2, 3];
let users: Array<string> = ["A", "B"];
```

---

### ✅ Objects

```ts
let user: { name: string; age: number } = {
  name: "Deepak",
  age: 30
};
```

---

### ✅ Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 8️⃣ Deep Typing Concepts (Important)

---

### 🔹 Union Type

👉 Multiple possible types

```ts
let id: number | string;

id = 10;
id = "ABC";
```

---

### 🔹 Intersection Type

👉 Combine multiple types

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;

let obj: C = { name: "Deepak", age: 30 };
```

---

### 🔹 Type Alias

```ts
type User = {
  name: string;
  age: number;
};
```

---

### 🔹 Interface

```ts
interface User {
  name: string;
  age: number;
}
```

---

### 🔹 Optional Properties

```ts
type User = {
  name: string;
  age?: number;
};
```

---

### 🔹 Readonly

```ts
type User = {
  readonly id: number;
};
```

---

### 🔹 Any (Avoid)

```ts
let data: any = "Hello";
```

👉 Removes type safety ❌

---

### 🔹 Unknown (Safe alternative)

```ts
let data: unknown;

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

## 9️⃣ Real-World Use Cases

1. API response validation
2. Form handling
3. Large-scale apps
4. Backend services
5. SDK/library development

---

## 🔟 Common Mistakes

* Using `any` everywhere ❌
* Ignoring compiler errors ❌
* Confusing interface vs type ❌
* Not defining return types ❌

---

## 11️⃣ Deep Concepts

* Structural typing
* Type inference
* Type narrowing
* Generics (advanced)
* Strict mode

---

# 🧠 Knowledge Check (MCQ)

---

### Q1. TypeScript is:

A. New language
B. Superset of JavaScript
C. Database
D. Framework

**Answer:** B

---

### Q2. TypeScript runs directly in browser:

A. Yes
B. No
C. Sometimes
D. Only Chrome

**Answer:** B

---

### Q3. Which provides multiple types?

A. Interface
B. Union
C. Class
D. Enum

**Answer:** B

---

### Q4. Which combines types?

A. Union
B. Intersection
C. Enum
D. Any

**Answer:** B

---

### Q5. Safe alternative to any:

A. unknown
B. never
C. void
D. null

**Answer:** A

---

(…extend to 20 in same balanced pattern if needed)

---

# 🧾 Subjective Questions

---

### Q1. Why TypeScript over JavaScript?

**Answer:**
TypeScript provides static typing, early error detection, better tooling, and scalability for large applications.

---

### Q2. Difference between interface and type?

**Answer:**
Interface is mainly for object structures and extensibility, while type is more flexible (supports unions, intersections).

---

### Q3. What is union type?

**Answer:**
Allows a variable to hold multiple types.

---

### Q4. What is compilation in TypeScript?

**Answer:**
Conversion of TypeScript code into JavaScript using `tsc`.

---

### Q5. Why avoid any?

**Answer:**
It removes type safety and defeats TypeScript purpose.

---

# 🧪 Practical Assignments

---

### Assignment 1

Create a user object with:

* name
* age
* optional email

---

### Assignment 2

Create function:

* takes number OR string
* returns formatted output

---

### Assignment 3

Create type for:

* Product (id, name, price)

---

### Assignment 4

Use union + intersection together

---

# 🚀 Mini Projects

---

### Project 1: User Management System

* Add user
* Update user
* Type validation

---

### Project 2: API Response Validator

* Define response types
* Validate response

---

# 🎯 Interview Notes

* TypeScript = JS + Types
* Compile-time safety
* Union vs Intersection important
* Interface vs Type common question
* Avoid `any`

---

# ✅ Summary

* TypeScript improves JavaScript
* Adds type safety
* Helps in large-scale apps
* Reduces runtime bugs
* Essential for modern development

---

