//W37 JS Loops the 1st exercise

let items = ["Peter", 7, "Marianne", true, "Helle", 8];

items.forEach((element) => {
  console.log(`${element} is a ${typeof element}`);
});

var bookList = document.getElementById("book-list");
//W37 JS Loops the 2nd exercise
let bookLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
];

window.addEventListener("load", () => {
  bookLibrary.forEach((book) => {
    let li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    bookList.appendChild(li);
  });
});

//W37 JS exercise 3 focused on statements
console.log("Statement exercise");
const findLargest = (num1, num2, num3, num4) => {
  let largest = num1;
  if (num2 > largest) largest = num2;
  if (num3 > largest) largest = num3;
  if (num4 > largest) largest = num4;

  return largest;
};

console.log(findLargest(1123, 222, 1233, 2422));
console.log(findLargest(1, 22, 83, 4));

console.log("check if a number belongs to the certain range");
const checkRange = (numberToCheck, rangeStart, rangeEnd) => {
  return numberToCheck >= rangeStart && numberToCheck <= rangeEnd
    ? true
    : false;
};

console.log("The number is in the scale of range", checkRange(5, 1, 10));
console.log("The number is not in the scale of range", checkRange(11, 1, 10));
