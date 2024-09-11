const form = document.getElementById('userForm');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const usernameError = document.getElementById('user-error');
const passwordError = document.getElementById('password-error');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUsername(username) {
  return username.length >= 4 && username.length <= 15;
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  emailError.textContent = '';
  usernameError.textContent = '';
  passwordError.textContent = '';

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (!validateUsername(usernameInput.value)) {
    usernameError.textContent =
      'Username must be at least 4 characters and at most 15 characters.';
    valid = false;
  }

  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent =
      'Password must be at least 8 characters, include a number and a special character.';
    valid = false;
  }
});
