---

# 📘 Functions & Parameter Typing in TypeScript

---

## 1️⃣ What

A **function** is a reusable block of code that performs a task.

**Parameter typing** ensures that inputs to a function follow a **strict structure and type rules**.

---

## 2️⃣ Why

* Prevent wrong inputs ❌
* Ensure predictable outputs ✅
* Improve readability & maintainability ✅
* Enable safer refactoring ✅

👉 Functions = system behavior
👉 Typing = safety layer

---

## 3️⃣ When

Use typed functions when:

* Writing reusable logic
* Handling API data
* Creating utilities/libraries
* Working in teams
* Building scalable apps

---

## 4️⃣ How (Execution Flow)

```
Input → Typed Parameters → Function Logic → Typed Return → Output
```

---

## 5️⃣ Real-Life Analogy (Mind Mapping)

👉 ATM Machine:

* Insert correct card → accepted
* Insert wrong card → rejected

👉 Function parameters = validation gate
👉 Return type = guaranteed output

---

## 6️⃣ Engineering View

| Concept            | Meaning                 |
| ------------------ | ----------------------- |
| Parameter Typing   | Input validation        |
| Return Type        | Output contract         |
| Function Signature | Input + Output          |
| Type Safety        | Prevent invalid calls   |
| Reusability        | Same logic, safe inputs |

---

# 7️⃣ Syntax (Core Basics)

---

## ✅ Basic Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## ✅ Arrow Function

```ts
const add = (a: number, b: number): number => a + b;
```

---

## ✅ Void Function

```ts
function log(message: string): void {
  console.log(message);
}
```

---

# 8️⃣ Parameter Types (FULL DEPTH)

---

## 🔹 1. Required Positional Parameters

👉 Must be provided in order

```ts
function greet(name: string, age: number): string {
  return `${name} is ${age}`;
}
```

---

## 🔹 2. Optional Parameters (`?`)

👉 May or may not be provided

```ts
function greet(name: string, age?: number): string {
  return age ? `${name} is ${age}` : name;
}
```

---

## 🔹 3. Default Parameters

👉 Provide default value

```ts
function greet(name: string, age: number = 18): string {
  return `${name} is ${age}`;
}
```

---

## 🔹 4. Rest Parameters (`...`)

👉 Multiple values

```ts
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

## 🔹 5. Named Parameters (Object Style)

👉 Cleaner for multiple inputs

```ts
type User = {
  name: string;
  age: number;
};

function createUser({ name, age }: User): void {
  console.log(name, age);
}
```

---

## 🔹 6. Required Named Parameters

```ts
type Config = {
  url: string;
  method: string;
};

function request(config: Config): void {}
```

---

## 🔹 7. Optional Named Parameters

```ts
type Config = {
  url: string;
  timeout?: number;
};

function request(config: Config): void {}
```

---

## 🔹 8. Nullable Parameters

```ts
function print(value: string | null): void {
  if (value) console.log(value);
}
```

---

## 🔹 9. Function as Parameter (Callback)

```ts
function process(callback: (value: number) => void) {
  callback(10);
}
```

---

## 🔹 10. Union Parameters

```ts
function printId(id: number | string): void {
  console.log(id);
}
```

---

## 🔹 11. Intersection Parameters

```ts
type A = { name: string };
type B = { age: number };

function printUser(user: A & B): void {}
```

---

## 🔹 12. Generic Function (Advanced)

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

# 9️⃣ Return Types

---

## ✅ Explicit Return

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

---

## ✅ Void Return

```ts
function log(): void {}
```

---

## ✅ Never Return

```ts
function fail(): never {
  throw new Error("Error");
}
```

---

## ✅ Inferred Return

```ts
function add(a: number, b: number) {
  return a + b; // inferred number
}
```

---

# 🔟 Real-World Use Cases

---

1. API service functions
2. Form validation functions
3. Utility libraries
4. Event handlers
5. Backend controllers

---

# 11️⃣ Common Mistakes

---

* Not typing return values ❌
* Overusing `any` ❌
* Misusing optional parameters ❌
* Forgetting null checks ❌
* Incorrect callback typing ❌

---

# 12️⃣ Deep Concepts

---

* Function overloading
* Currying with types
* Higher-order functions
* Type inference in functions
* Variance (advanced)

---

# 🧠 Knowledge Check (MCQ)

---

### Q1. Function typing ensures:

A. Styling
B. Safety
C. Database
D. UI

**Answer:** B

---

### Q2. Optional parameter syntax:

A. !
B. ?
C. #
D. &

**Answer:** B

---

### Q3. Rest parameter:

A. ?
B. ...
C. &
D. |

**Answer:** B

---

### Q4. Callback is:

A. Variable
B. Function parameter
C. Object
D. Enum

**Answer:** B

---

### Q5. Default parameter:

A. Optional
B. Has default value
C. Required
D. Unknown

**Answer:** B

---

(Extend to 20 balanced if needed)

---

# 🧾 Subjective Questions

---

### Q1. What is function typing?

**Answer:**
Defining input and output types of a function to ensure safe usage.

---

### Q2. Difference between optional and default parameters?

**Answer:**
Optional may be undefined; default always has a fallback value.

---

### Q3. What are rest parameters?

**Answer:**
Allow passing multiple values as an array.

---

### Q4. What is callback typing?

**Answer:**
Typing a function passed as a parameter.

---

### Q5. What is generic function?

**Answer:**
Function that works with multiple types using type parameters.

---

# 🧪 Practical Assignments

---

### Assignment 1

Create function:

* takes name + optional age

---

### Assignment 2

Create sum function using rest parameters

---

### Assignment 3

Create function with callback

---

### Assignment 4

Create generic function

---

# 🚀 Mini Projects

---

### Project 1: Calculator Engine

* Typed functions for operations

---

### Project 2: API Service Layer

* Typed request + response functions

---

# 🎯 Interview Notes

---

* Required vs optional vs default
* Rest parameters
* Callback typing
* Generic functions
* Return type importance

---

# ✅ Summary

---

* Functions = core logic
* Parameter typing = safety
* Multiple parameter styles exist
* Return types ensure correctness
* Essential for scalable apps

---


