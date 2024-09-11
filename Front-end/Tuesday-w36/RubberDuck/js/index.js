const sendButton = document.getElementById('sendButton');
const responseMessage = document.getElementById('responseMessage');
const textInput = document.getElementById('textAreaInput');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('user-name');

let storageOfMessages = [];

const displayStoredMessages = () => {
  const messageList = document.getElementById('messageList');
  messageList.innerHTML = '';
  storageOfMessages.forEach(function (message) {
    const li = document.createElement('li');
    li.textContent = message.text;
    console.log(message);
    li.setAttribute('title', 'Sent on ' + message.time);
    messageList.appendChild(li);
  });
};

window.addEventListener('load', function () {
  const storedMessages = localStorage.getItem('storageOfMessages');
  const createdUser = localStorage.getItem('username');
  if (storedMessages) {
    storageOfMessages = JSON.parse(storedMessages);
    displayStoredMessages();
  }

  userName.textContent = createdUser ? createdUser : '';

  // prompt user for their name
  //const nameOfUser = prompt('What is your name?');
  //greeting.textContent = `Hello, ${nameOfUser}!`;
});

sendButton.addEventListener('click', function () {
  const message = textInput.value;
  if (message.trim() === '') {
    responseMessage.textContent = 'You forgot to write a message!';
  } else {
    responseMessage.textContent = 'Message has been successfully sent!';
    let timeStampMessage = { text: message, time: new Date().toLocaleString() };
    storageOfMessages.push(timeStampMessage);
    localStorage.setItem('storedMessages', JSON.stringify(storageOfMessages));
    displayStoredMessages();
  }
  textInput.value = '';
});
