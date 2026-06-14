// This JavaScript file is intentionally simple.
// Learners can edit this file and observe Git changes using git status.

const message = document.getElementById('message');
const button = document.getElementById('changeMessageButton');

button.addEventListener('click', () => {
  message.textContent = 'Git tracks this JavaScript change.';
});
