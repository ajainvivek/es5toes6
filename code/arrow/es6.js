// ES6 - Shortcut Notation
var add = (a, b) => {
  return a + b;
}
var sub = (a, b) => a - b;
console.log(add(2, 3)); //5
console.log(sub(5, 3)); //2

// ES6 - Constructor Lexical Binding
var Greeting = function (name) {
  this.name = name;
  this.sayHello = () => {
    console.log(`Hello ${this.name} !!!`);
  }
  this.sayHelloAsync = () => {
    setTimeout(() => {
      console.log(`Hello ${this.name} !!!`);
    }, 1000);
  }
}
var {sayHello, sayHelloAsync} = new Greeting('Jon');
sayHello(); //Hello Jon !!!
sayHelloAsync(); //Hello Jon !!!
