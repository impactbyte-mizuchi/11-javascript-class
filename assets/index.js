// Parent Class
class Animal {
  constructor(type, name, number1, number2) {
    this.type = type;
    this.name = name;
    this.number1 = number1;
    this.number2 = number2;
  }

  walk = () => {
    return `${this.name} is riding ${this.type} flying high around the world`;
  };

  getName = () => {
    return this.name;
  };

  setName = (newName) => {
    this.name = newName;
    return this.name;
  };

  calculate = (number1, number2) => {
    return number1 + number2;
  };
}

const dragon = new Animal("Dragon", "Miftah", 12, 10);

console.log(dragon, "Class Dragon");

console.log(dragon.walk());
console.log(dragon.getName());
console.log(dragon.setName("Mizuchi"));
console.log(dragon.calculate(30, 100));

// Child Class
class Cat extends Animal {
  constructor(type, name, number1, number2, newName) {
    super(type, name, number1, number2);
    // atau

    // this.type = type; // persian
    // this.name = name; // cuty
    // this.number1 = number1; // 12
    // this.number2 = number2; // 29

    this.newName = newName;
  }

  eat = () => {
    return `${this.name} and ${this.newName} eat tuna every morning`;
  };

  addition = () => {
    return this.number1 + this.number2;
  };
}

const cat = new Cat("Persian", "Cuty", 12, 29, "Coco");

console.log(cat, "new class cat");
console.log(cat.eat());
console.log(cat.getName());
console.log(cat.setName("empus"));
console.log(cat.addition());
console.log(cat.calculate(25, 3));
