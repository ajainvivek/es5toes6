// Constructor Method
var Person = function (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  return 'Hello ' + this.name;
}

var person1 = new Person('Jon', 25);
console.log(person1.sayHello());

// Classical JS Prototypical Inheritance
var Employee = function (name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = new Person(); // Here's where the inheritance occurs
Employee.prototype.constructor = Employee; // Otherwise instances of Employee would have a constructor of Person
Employee.prototype.parent = Person.prototype; // Super

Employee.prototype.sayHello = function () {
  return this.parent.sayHello.call(this) + " !!!!!";
}

var employee1 = new Employee("Smith", 2000);
console.log(employee1.sayHello());
