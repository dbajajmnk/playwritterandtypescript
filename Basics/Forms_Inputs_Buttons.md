# 📘 Forms, Inputs & Buttons (Engineering-First Template)

---

## 🧠 1. WHAT & WHY

### WHAT
Forms are used to collect user input in web applications.

- HTML → Structure
- CSS → Styling
- JavaScript → Behavior

Core elements:
- `<form>` → container
- `<input>` → data entry
- `<button>` → action trigger

### WHY
- Required for login, signup, payments
- Enables user interaction
- Backbone of dynamic applications

---

## 🧠 2. PLAIN-ENGLISH MIND MAPPING

### 🏦 Bank Form Analogy

![Bank Form](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d)
![Online Form](https://images.unsplash.com/photo-1519389950473-47ba0277781c)
![Submit Button](https://images.unsplash.com/photo-1581090700227-1e8d5c0c1f5c)

Real-world vs Web:

- Paper Form → `<form>`
- Fields → `<input>`
- Submit → `<button>`
- Officer validation → JavaScript validation

---

## ⚙️ 3. ENGINEERING CONCEPT

### Flow:
1. User enters data
2. DOM stores values
3. JavaScript validates
4. Data submitted to server

---

## 💻 4. LANGUAGE SYNTAX

### HTML
```html
<form onsubmit="handleSubmit(event)">
  <input type="text" id="name" placeholder="Enter Name" />
  <input type="email" id="email" placeholder="Enter Email" />
  <button type="submit">Submit</button>
</form>
```

### JavaScript
```javascript
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;

  if (name === "") {
    alert("Name is required");
  }
}
```

---

## ⚠️ 5. COMMON MISTAKES

- No validation
- Wrong input types
- Missing labels
- No preventDefault()

---

## 🧪 6. PRACTICE

### Basic
- Create form with name + email

### Intermediate
- Add validation

### Advanced
- Login form with error handling

---

## 🧪 7. MCQ

1. Which tag defines form?  
A `<form>`  
B `<input>`  
C `<button>`

2. What does submit do?  
A Style  
B Send data  
C Store data  

---

## ✅ ANSWERS

1-A  
2-B  

---

## ✍️ SUBJECT QUESTIONS

1. What is a form?  
2. Explain input types  
3. What is validation?  
4. Difference between button types  

---

## 🎯 ASSIGNMENT

Build:
- Login form
- Validate inputs
- Show error messages

---

## 🚀 SUMMARY

Forms collect user input, validate it using JavaScript, and send it to backend systems.
