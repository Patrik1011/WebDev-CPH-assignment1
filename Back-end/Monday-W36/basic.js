const getFullName = (firstName, lastName) => {
  return `Name of the person is: ${firstName} and lastname: ${lastName}`;
};

//console.log(getFullName("Patrik", "Hoferica"));

const calculateAreaOfRectangle = (width, height) => {
  return `The area of rectangle is: ${width * height}`;
};

//console.log(calculateAreaOfRectangle(10, 20));

const Distance = (speed, time) => {
  return `you have traveled ${speed * time} km`;
};

//console.log(Distance(50, 2));

let calculator = {
  name: "Patrik",
  fullName: getFullName("Patrik", "Hoferica"),
  area: calculateAreaOfRectangle(10, 20),
  distance: Distance(50, 2),
};

console.log(calculator);
