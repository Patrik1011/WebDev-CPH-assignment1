let names = ["Patrik", "Adam", "Martin", "Thomas", "Mark"];

console.log(names[0]);

console.log("index of Martin record: ", names.indexOf("Martin"));

names.push("Jakub");
console.log("extended array: " + names);

let newNames = names.slice(0, 3);
console.log("new array: " + newNames);

let person1 = {
  firstName: "Patrick",
  lastName: "Hoferica",
  email: "patrikhoferica@gmail.com",
};

let person2 = {
  firstName: "Jakub",
  lastName: "Marek",
  email: "jakubmarek@gmail.com",
};

let persons = [person1, person2];
console.log(persons);
console.log(persons[0].email);
