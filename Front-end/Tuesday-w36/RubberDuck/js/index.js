const sendButton = document.getElementById('sendButton');
const responseMessage = document.getElementById('responseMessage');
const textInput = document.getElementById('textAreaInput');
const greeting = document.getElementById('greeting');

const storageOfMessages = [];

function displayStoredMessages() {
  var messageList = document.getElementById('messageList');
  messageList.innerHTML = '';
  storageOfMessages.forEach(function (message) {
    var li = document.createElement('li');
    li.textContent = message.text;
    console.log(message);
    li.setAttribute('title', 'Sent on ' + message.time);
    messageList.appendChild(li);
  });
}

window.addEventListener('load', function () {
  var storedMessages = localStorage.getItem('storageOfMessages');
  if (storedMessages) {
    storageOfMessages = JSON.parse(storedMessages);
    displayStoredMessages();
  }
  //const nameOfUser = prompt('What is your name?');
  //greeting.textContent = `Hello, ${nameOfUser}!`;
});

sendButton.addEventListener('click', function () {
  var message = textInput.value;
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
