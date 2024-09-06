var sendButton = document.getElementById('sendButton');
var responseMessage = document.getElementById('responseMessage');
var textInput = document.getElementById('textAreaInput');
var storageOfMessages = [];

function displayStoredMessages() {
  var messageList = document.getElementById('messageList');
  messageList.innerHTML = '';
  storageOfMessages.forEach(function (message) {
    var li = document.createElement('li');
    li.textContent = message;
    messageList.appendChild(li);
  });
}

window.addEventListener('load', function () {
  var storedMessages = localStorage.getItem('storageOfMessages');
  if (storedMessages) {
    storageOfMessages = JSON.parse(storedMessages);
    displayStoredMessages();
  }
});

sendButton.addEventListener('click', function () {
  var message = textInput.value;
  if (message.trim() === '') {
    responseMessage.textContent = 'You forgot to write a message!';
  } else {
    responseMessage.textContent = 'Message has been successfully sent!';
    storageOfMessages.push(message);
    localStorage.setItem('storedMessages', JSON.stringify(storageOfMessages));
    displayStoredMessages();
  }
  textInput.value = '';
});
