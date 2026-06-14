const nameInput = document.querySelector('#student-name');
const startButton = document.querySelector('#start-learning');
const welcomeMessage = document.querySelector('#welcome-message');
const comparisonButton = document.querySelector('#show-comparison');
const comparisonPanel = document.querySelector('#comparison-panel');

startButton.addEventListener('click', () => {
  const studentName = nameInput.value.trim() || 'Student';
  welcomeMessage.textContent = `Welcome ${studentName}, Playwright automation started.`;
});

comparisonButton.addEventListener('click', () => {
  comparisonPanel.hidden = false;
});
