const byId = (id) => document.getElementById(id);

byId('login-button').addEventListener('click', () => {
  const email = byId('login-email').value;
  const password = byId('login-password').value;
  const message = byId('login-message');

  if (email === 'user@test.com' && password === '123456') {
    message.textContent = 'Login successful';
    message.className = 'success';
  } else {
    message.textContent = 'Invalid login details';
    message.className = 'error';
  }
});

byId('profile-file').addEventListener('change', (event) => {
  const file = event.target.files[0];
  byId('upload-message').textContent = file ? `Uploaded: ${file.name}` : '';
});

byId('training-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = byId('full-name').value;
  const email = byId('email').value;
  const country = byId('country').value;
  const terms = byId('terms').checked;
  const file = byId('profile-file').files[0];
  const formMessage = byId('form-message');

  if (name && email && country && terms && file) {
    formMessage.textContent = 'Form submitted successfully';
    formMessage.className = 'success';
  } else {
    formMessage.textContent = 'Please complete all required fields';
    formMessage.className = 'error';
  }
});

byId('search-box').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    byId('search-result').textContent = `Search executed for: ${event.target.value}`;
  }
});

byId('menu').addEventListener('mouseenter', () => {
  byId('menu-panel').classList.remove('hidden');
});

byId('menu').addEventListener('mouseleave', () => {
  byId('menu-panel').classList.add('hidden');
});

byId('source').addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'source');
});

byId('target').addEventListener('dragover', (event) => {
  event.preventDefault();
});

byId('target').addEventListener('drop', (event) => {
  event.preventDefault();
  byId('target').classList.add('dropped');
  byId('target').textContent = 'Dropped Successfully';
  byId('drag-message').textContent = 'Drag and drop completed';
});

byId('double-click-button').addEventListener('dblclick', () => {
  byId('double-click-message').textContent = 'Double click completed';
});

byId('right-click-box').addEventListener('contextmenu', (event) => {
  event.preventDefault();
  byId('right-click-message').textContent = 'Right click completed';
});

byId('notes').addEventListener('focus', () => {
  byId('focus-message').textContent = 'Notes input focused';
});

byId('covered-button').addEventListener('click', () => {
  byId('covered-message').textContent = 'Covered button clicked using force';
});
