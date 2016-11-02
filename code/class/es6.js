// Class based approach
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

var person1 = new Person('Jon', 25);
console.log(person1.sayHello());

// Classical JS Inheritance
class Employee extends Person {
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
  }

  sayHello() {
    return `${super.sayHello()} !!!!`;
  }
}

var employee1 = new Employee("Smith", 2000);
console.log(employee1.sayHello());
