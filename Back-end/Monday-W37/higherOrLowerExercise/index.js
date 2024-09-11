const inputField = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const attemptsMessage = document.getElementById("attempt-message");

let trackTries = 0;

const generateNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const writeMessage = (messageText) => {
  message.textContent = messageText;
  attemptsMessage.textContent = `Attempts: ${trackTries}`;
};

const resetMessages = () => {
  message.textContent = "";
  attemptsMessage.textContent = "";
};

submitButton.addEventListener("click", () => {
  resetMessages();
  const number = generateNumber();
  console.log(number);
  let input = inputField.value.trim();
  input = Number(input);

  if (isNaN(input)) {
    writeMessage("Please enter a valid number");
    return;
  }

  if (input < 1 || input > 100) {
    writeMessage("Please enter a number between 1 and 100");
    inputField.value = 0;
    return;
  }

  trackTries++;

  input === number
    ? (writeMessage(`Congratulations! You guessed the right number ${number}`),
      (trackTries = 0))
    : writeMessage(
        `Your guess is ${
          input < number ? "lower" : "higher"
        } than the generated number`
      );

  inputField.value = 0;
});
