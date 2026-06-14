// This small JavaScript file represents application code.
// In a real project, this code would be built, tested, and deployed by CI/CD.

function getHealthMessage() {
  return 'Health check passed';
}

if (typeof document !== 'undefined') {
  const button = document.getElementById('health-button');
  const result = document.getElementById('health-result');

  button.addEventListener('click', () => {
    result.textContent = getHealthMessage();
  });
}

// Export function for simple Node-based smoke test.
module.exports = { getHealthMessage };
