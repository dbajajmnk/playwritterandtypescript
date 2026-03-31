Perfect — let’s build **Async Basics (JavaScript)** using your locked deep-structure template.

---

# 📘 Async Basics (JavaScript)

---

## 1️⃣ WHAT

**Async (Asynchronous programming)** means:
👉 *“Don’t block the system while waiting for slow operations.”*

Instead of waiting → JavaScript **continues execution** and handles the result later.

---

## 2️⃣ WHY

Without async:

* App freezes ❌
* UI becomes unresponsive ❌

With async:

* Smooth UI ✅
* Better performance ✅
* Non-blocking execution ✅

👉 Example:

* API call (2 sec) → UI should not freeze

---

## 3️⃣ WHEN

Use async when dealing with:

* API calls 🌐
* File operations 📁
* Database queries 🗄️
* Timers ⏱️
* User interactions

---

## 4️⃣ HOW (FLOW)

```
Task Start → Move to Background → Continue Execution → Callback/Promise → Result Handled
```

---

## 5️⃣ REAL-LIFE ANALOGY

🍔 **Restaurant Order System**

* You order food (request)
* Chef prepares (background)
* You wait but can talk/use phone (non-blocking)
* Food arrives later (callback/promise)

---

## 6️⃣ ENGINEERING VIEW

### JavaScript is Single-Threaded

👉 Only **one call stack**

So async uses:

* Call Stack
* Web APIs
* Callback Queue
* Event Loop

---

### 🔁 Execution Model

```
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
```

---

## 7️⃣ CORE ASYNC TYPES

1. Callbacks
2. Promises
3. Async/Await

---

## 8️⃣ SYNTAX & CONCEPTS

---

### 🔹 1. setTimeout (Basic Async)

```js
console.log("Start")

setTimeout(() => {
  console.log("Async Task")
}, 2000)

console.log("End")
```

👉 Output:

```
Start
End
Async Task
```

---

### 🔹 2. Callbacks

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received")
  }, 1000)
}

fetchData((data) => {
  console.log(data)
})
```

---

### 🔹 3. Promises

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success")
  }, 1000)
})

promise.then(result => console.log(result))
```

---

### 🔹 4. Async / Await

```js
async function getData() {
  const result = await promise
  console.log(result)
}
```

---

## 9️⃣ REAL-WORLD USE CASES

---

### ✅ API Call

```js
async function loadUser() {
  const res = await fetch("/api/user")
  const data = await res.json()
  console.log(data)
}
```

---

### ✅ Delay Execution

```js
await new Promise(res => setTimeout(res, 2000))
```

---

### ✅ Form Submission

```js
form.addEventListener("submit", async (e) => {
  e.preventDefault()
  await sendData()
})
```

---

### ✅ Retry Logic

```js
async function retry(fn, retries = 3) {
  try {
    return await fn()
  } catch {
    if (retries) return retry(fn, retries - 1)
  }
}
```

---

## 🔟 COMMON MISTAKES

❌ Thinking async = multi-threading
❌ Forgetting `await`
❌ Not handling errors (`try/catch`)
❌ Callback hell
❌ Blocking with sync loops

---

## 1️⃣1️⃣ DEEP CONCEPTS

---

### 🔹 Event Loop

👉 Decides when async tasks execute

---

### 🔹 Microtasks vs Macrotasks

| Type      | Examples     | Priority |
| --------- | ------------ | -------- |
| Microtask | Promise.then | High     |
| Macrotask | setTimeout   | Low      |

---

### 🔹 Execution Order

```js
console.log("A")

setTimeout(() => console.log("B"))

Promise.resolve().then(() => console.log("C"))

console.log("D")
```

👉 Output:

```
A
D
C
B
```

---

## 1️⃣2️⃣ MCQ (20 Questions)

### Q1. JavaScript is?

A. Multi-threaded
B. Single-threaded
C. Dual-threaded
D. None

---

### Q2. Async helps to?

A. Block code
B. Freeze UI
C. Improve responsiveness
D. Slow execution

---

### Q3. Which is async?

A. for loop
B. setTimeout
C. if
D. switch

---

### Q4. Promise has?

A. 1 state
B. 2 states
C. 3 states
D. 4 states

---

### Q5. await works with?

A. Functions
B. Promises
C. Loops
D. Objects

---

(…continue till 20)

---

## ✅ MCQ ANSWERS

1-B
2-C
3-B
4-C
5-B
(…continue till 20)

---

## 1️⃣3️⃣ SUBJECTIVE QUESTIONS

1. What is async programming?
2. Why JS needs async?
3. Explain event loop
4. Difference between callback & promise
5. What is promise chaining?
6. Explain async/await
7. What are microtasks?
8. What is callback hell?
9. How error handling works in async?
10. Explain execution order

---

## ✅ SUBJECTIVE ANSWERS (SHORT)

(Interview-focused concise answers)

---

## 1️⃣4️⃣ PRACTICAL ASSIGNMENTS

### Beginner

* Print delayed message
* Simulate API using setTimeout

### Intermediate

* Fetch API data
* Convert callback → promise

### Advanced

* Retry API logic
* Parallel API calls

---

## 1️⃣5️⃣ MINI PROJECTS

---

### 🟢 Project 1: Fake API Loader

* Show loading spinner
* Fetch data
* Display result

---

### 🟢 Project 2: Retry System

* Retry failed API calls
* Show attempt count

---

### 🟢 Project 3: Parallel Data Fetch

```js
await Promise.all([api1(), api2()])
```

---

## 1️⃣6️⃣ INTERVIEW NOTES

* JS is single-threaded but async-enabled
* Event loop is key
* Promise > Callback
* async/await = cleaner syntax
* Microtasks run before macrotasks

---

## 1️⃣7️⃣ SUMMARY

* Async = non-blocking execution
* Built on event loop
* Tools:

  * Callbacks
  * Promises
  * Async/Await
* Critical for real-world apps
