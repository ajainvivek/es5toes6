// ES5 - Simple Function
var add = function (a, b) {
  return a + b;
}
var sub = function (a, b) {
  return a - b;
}
console.log(add(2, 3)); //5
console.log(sub(5, 3)); //2

// ES5 - Constructor Binding
var Greeting = function (name) {
  var self = this;
  this.name = name;
  this.sayHello = function () {
    console.log('Hello ' + this.name + ' !!!');
  }
  this.sayHelloAsync = function () {
    setTimeout(function () {
      console.log('Hello ' + self.name + ' !!!');
    }, 1000);
  }
}
var g = new Greeting('Jon');
g.sayHello(); //Hello Jon !!!
g.sayHelloAsync(); //Hello Jon !!!
