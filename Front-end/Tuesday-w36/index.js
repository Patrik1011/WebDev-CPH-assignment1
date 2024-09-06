var buttonHover = document.getElementById("button");
var message = document.getElementById("message");

var inputField = document.getElementById("newTodoText");
var addButton = document.getElementById("addButton");
var todoList = document.getElementById("todoList");
var li = document.getElementsByTagName("li");

function createTodo() {
  var newTodoText = inputField.value.trim();
  if (newTodoText !== "") {
    var newTodo = document.createElement("li");
    newTodo.textContent = newTodoText;
    todoList.appendChild(newTodo);
    newTodo.addEventListener("click", function () {
      todoList.removeChild(newTodo);
    });
  }
  inputField.value = "";
}

addButton.addEventListener("click", function () {
  createTodo();
});

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createTodo();
  }
});

buttonHover.addEventListener("mouseover", function () {
  message.classList.remove("hidden");
  message.classList.add("visible");
});

buttonHover.addEventListener("mouseout", function () {
  message.classList.remove("visible");
  message.classList.add("hidden");
});
