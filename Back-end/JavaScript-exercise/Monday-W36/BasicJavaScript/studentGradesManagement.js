const student1 = {
  name: "Patrik",
  id: 1,
  grades: [7, 7, 7, 10],
};

function addGrades(student, grade) {
  student.grades.push(grade);
  return student.grades;
}

function updateStudentName(student, newName) {
  student.name = newName;
  return student.name;
}

const student2 = {
  name: "Jacob",
  id: 2,
  grades: [2, 7, 10, 12],
};

console.log(
  "updating a name of student nr1",
  updateStudentName(student1, "Thomas")
);

console.log("Name of student2 before update: ", student2.name);

console.log("updated student2 name: ", updateStudentName(student2, "John"));

console.log("update student2 grades: ", addGrades(student2, 5));

console.log("Grades of student1 before update: ", student1.grades);
addGrades(student1, 12);
addGrades(student1, 2);
console.log("Grades of student1 after update: ", student1.grades);
