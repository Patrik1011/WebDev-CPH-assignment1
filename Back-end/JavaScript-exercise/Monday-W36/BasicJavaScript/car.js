class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  getCarInfo() {
    return `car Info: ${this.year} ${this.make} ${this.model}`;
  }

  start() {
    this.isRunning = true;
    return "Car has started";
  }

  stop() {
    this.isRunning = false;
    return "Car has stopped";
  }
}

const car1 = new Car("Audi", "A6", 2019);
const car2 = new Car("BMW", "X#", 2024);

console.log(car1.getCarInfo());
console.log(car1.start());
console.log(car1.stop());

console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.stop());
