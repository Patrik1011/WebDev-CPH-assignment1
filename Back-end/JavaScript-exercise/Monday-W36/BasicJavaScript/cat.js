class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }
  getCatInfo() {
    return `Name: ${this.name}, Color: ${this.color}, Breed: ${this.breed}`;
  }
  changeCatsName(newName) {
    this.name = newName;
    return `The new name of the cat is: ${this.name}`;
  }
}
