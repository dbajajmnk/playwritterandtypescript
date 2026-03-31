# 📘 Data Types & Type Safety in TypeScript

---

## 1️⃣ What

**Data Types** define the **kind of value a variable can hold**.

**Type Safety** ensures that a variable is used **only in the way its type allows**.

---

## 2️⃣ Why

* Prevent runtime errors ❌
* Catch bugs during development ✅
* Improve code clarity ✅
* Enable safe refactoring ✅

👉 Without types → unexpected crashes
👉 With types → predictable behavior

---

## 3️⃣ When

Use strong typing when:

* Handling API data
* Writing reusable functions
* Building large-scale apps
* Working in teams

---

## 4️⃣ How (Execution Thinking)

```
Declare Variable → Assign Type → Compiler Checks → Safe Execution
```

Example:

```ts
let age: number = 25;

// age = "hello" ❌ Error at compile time
```

---

## 5️⃣ Real-Life Analogy (Mind Mapping)

👉 Think of a **container label**:

* Milk bottle → only milk
* Petrol tank → only fuel

If you mix → system fails ❌

👉 TypeScript = strict labeling system

---

## 6️⃣ Engineering View

| Concept         | Meaning                    |
| --------------- | -------------------------- |
| Primitive Types | Basic values               |
| Reference Types | Objects, arrays            |
| Static Typing   | Checked before execution   |
| Type Safety     | Prevent invalid operations |
| Type Inference  | Auto-detect type           |

---

# 7️⃣ Types in TypeScript

---

## 🔹 Primitive Types

---

### ✅ Number

```ts
let price: number = 100;
```

---

### ✅ String

```ts
let name: string = "Deepak";
```

---

### ✅ Boolean

```ts
let isActive: boolean = true;
```

---

### ✅ Null & Undefined

```ts
let data: null = null;
let value: undefined = undefined;
```

---

## 🔹 Special Types

---

### ⚠️ Any (Avoid)

```ts
let data: any = "Hello";
data = 10;
```

👉 No type checking ❌

---

### ✅ Unknown (Safe)

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

### ✅ Never

```ts
function error(): never {
  throw new Error("Fail");
}
```

👉 Function never completes

---

### ✅ Void

```ts
function log(): void {
  console.log("Hello");
}
```

---

## 🔹 Arrays

```ts
let nums: number[] = [1, 2, 3];
let names: string[] = ["A", "B"];
```

---

## 🔹 Tuples

👉 Fixed structure

```ts
let user: [string, number] = ["Deepak", 30];
```

---

## 🔹 Objects

```ts
let user: { name: string; age: number } = {
  name: "Deepak",
  age: 30
};
```

---

## 🔹 Enums

```ts
enum Status {
  Pending,
  Success,
  Failed
}

let state: Status = Status.Success;
```

---

## 🔹 Literal Types

```ts
let role: "admin" | "user";

role = "admin";
```

---

## 🔹 Union Types

```ts
let id: number | string;
```

---

## 🔹 Intersection Types

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;
```

---

## 🔹 Type Inference

```ts
let x = 10; // automatically number
```

---

# 8️⃣ Type Safety Explained

---

### ❌ Without Type Safety (JavaScript)

```js
let value = "10";
value * 2; // unexpected behavior
```

---

### ✅ With TypeScript

```ts
let value: number = 10;
value * 2; // safe
```

---

## 🔹 Type Narrowing

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

## 🔹 Strict Mode

```json
{
  "strict": true
}
```

👉 Enables:

* strict null checks
* better safety
* fewer bugs

---

# 9️⃣ Real-World Use Cases

---

1. API response typing
2. Form validation
3. Backend DTO validation
4. E-commerce product models
5. Role-based systems

---

# 🔟 Common Mistakes

---

* Overusing `any` ❌
* Ignoring compiler errors ❌
* Not using strict mode ❌
* Confusing `unknown` vs `any` ❌
* Not defining object types ❌

---

# 11️⃣ Deep Concepts

---

* Structural typing
* Type compatibility
* Control flow analysis
* Type guards
* Advanced narrowing

---

# 🧠 Knowledge Check (MCQ)

---

### Q1. Type safety means:

A. Runtime validation
B. Compile-time checking
C. Styling
D. API

**Answer:** B

---

### Q2. Which type disables safety?

A. unknown
B. any
C. never
D. void

**Answer:** B

---

### Q3. Safe alternative to any:

A. null
B. unknown
C. string
D. enum

**Answer:** B

---

### Q4. Tuple is:

A. Dynamic array
B. Fixed structure
C. Object
D. Enum

**Answer:** B

---

### Q5. Type inference means:

A. Manual typing
B. Auto detection
C. Runtime typing
D. API

**Answer:** B

---

(Extend to 20 similarly balanced)

---

# 🧾 Subjective Questions

---

### Q1. What is type safety?

**Answer:**
Type safety ensures variables are used only according to their defined types, preventing invalid operations.

---

### Q2. Difference between any and unknown?

**Answer:**
`any` disables checking, while `unknown` requires validation before use.

---

### Q3. What are tuples?

**Answer:**
Fixed-length arrays with predefined types.

---

### Q4. What is type inference?

**Answer:**
Automatic detection of variable type based on assigned value.

---

### Q5. What is union type?

**Answer:**
Allows multiple types for a variable.

---

# 🧪 Practical Assignments

---

### Assignment 1

Create variables using all primitive types

---

### Assignment 2

Create tuple for:

* name
* age

---

### Assignment 3

Create union type:

* string OR number

---

### Assignment 4

Write function using unknown + type check

---

# 🚀 Mini Projects

---

### Project 1: User Profile System

* Strong typing for user object

---

### Project 2: API Validator

* Validate API response using types

---

# 🎯 Interview Notes

---

* Type safety = compile-time protection
* any vs unknown (important)
* Tuple vs array
* Union vs intersection
* Strict mode

---

# ✅ Summary

---

* Data types define structure
* Type safety prevents bugs
* TypeScript improves reliability
* Use strict typing always
* Avoid `any`

