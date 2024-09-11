const form = document.getElementById('userForm');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const usernameError = document.getElementById('user-error');
const passwordError = document.getElementById('password-error');

const validateCphBusinessEmail = (email) => {
  const regex = /^[^\s@]+@cphbusiness\.dk$/;
  //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateUsername = (username) => {
  return username.length >= 4 && username.length <= 15;
};

const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  emailError.textContent = '';
  usernameError.textContent = '';
  passwordError.textContent = '';

  if (!validateCphBusinessEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid @cphbusiness.dk email.';
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

  if (valid) {
    const username = usernameInput.value.trim();
    const storedUserName = localStorage.getItem('username');

    console.log(storedUserName);

    if (username === storedUserName) {
      alert('user already exists');
      return;
    } else {
      localStorage.setItem('username', username);
      alert('user created');
    }
    window.location.href = 'index.html';
  }
});

const profanities = ['admin', 'root', 'administrator'];

usernameInput.addEventListener('input', () => {
  const userInput = usernameInput.value.toLowerCase();

  let containsProfanity = false;
  profanities.forEach((word) => {
    if (userInput.includes(word)) {
      containsProfanity = true;
    }
  });

  for (let word of profanities) {
    if (userInput.includes(word)) {
      containsProfanity = true;
      break;
    }
  }

  if (containsProfanity) {
    usernameInput.value = '';
    usernameError.textContent = 'Please avoid using inappropriate language.';
  } else {
    usernameError.textContent = '';
  }
});
