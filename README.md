---
title: Syntatic Sugar for NodeJS Application
separator: <!--s-->
verticalSeparator: <!--v-->
theme: css/theme/white.css
---
## Syntatic Sugar for NodeJS Application

@ajainvivek

<!--s-->

### What is EcmaScript2015(ES6)?

* Adds a set of new features to Ecma 262 standards
* Compatibility table [kangax](http://kangax.github.io/compat-table/es6/)

<!--s-->

### Adoption in NodeJS

* Node 4 ~ 50%
* Node 5 ~ 60%
* Node 6 > 90%

<!--s-->

### Function Defaults

Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.

<!--v-->

#### ES5

```javascript
  function add(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
  }
  add(2, 3); //5
  add(2); //2
```

<!--v-->

#### ES6

```javascript
  function add(x=0, y=0) {
    return x + y;
  }
  add(2, 3); //5
  add(2); //2
```

<!--s-->

### Rest Parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

<!--v-->

#### ES5

```javascript
  function logger() {
    var type = arguments[0];
    var messages = [];
    for (var i = 1; i < arguments.length; i++) {
      messages.push(arguments[i].message);
    }
    return type + " : " + messages;
  }
  logger("ERROR", {
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }); //ERROR : Cannot read property, product is not defined
```

<!--v-->

#### ES6

```javascript
  function logger(type, ...logs) {
    var messages = [];
    for (var i = 0; i < logs.length; i++) {
      messages.push(logs[i].message);
    }
    return type + " : " + messages;
  }
  logger("ERROR", {
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }); //ERROR : Cannot read property, product is not defined
```

<!--s-->

### Spread Operator

The spread syntax allows an expression to be expanded by comma separated values.

<!--v-->

#### ES5

```javascript
  function logger() {
    var type = arguments[0];
    var messages = [];
    for (var i = 1; i < arguments.length; i++) {
      messages.push(arguments[i].message);
    }
    return type + " : " + messages;
  }
  var errors = [{
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }];
  console.log(logger.apply({}, ["ERROR"].concat(errors))); //ERROR : Cannot read property, product is not defined
```

<!--v-->

#### ES6

```javascript
  function logger(type, ...logs) {
    var messages = [];
    for (var i = 0; i < logs.length; i++) {
      messages.push(logs[i].message);
    }
    return type + " : " + messages;
  }
  var errors = [{
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }];
  logger("ERROR", errors...); //ERROR : Cannot read property, product is not defined
```

<!--s-->

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

<!--v-->

#### ES5

```javascript
  function regionService() {
    function getRegion(name) {
      var region = {
        name: "Sydney",
        data: {
          population: 100
        }
      };
      var transform = {};
      transform[region.name] = region.data;
      return transform;
    }
    function getAllRegions() {
      var regions = [];
      return regions;
    }
    return {
      getRegion: getRegion,
      getAllRegions: getAllRegions,
      getRandomRegion: function () {
        return Math.floor(Math.random() * 6) + 1  
      }
    }
  }
```

<!--v-->

#### ES6

```javascript
  function regionService() {
    function getRegion(name) {
      var region = {
        name: "Sydney",
        data: {
          population: 100
        }
      };
      return {
        [region.name] : region.data
      };
    }
    function getAllRegions() {
      var regions = [];
      return regions;
    }
    return {
      getRegion,
      getAllRegions,
      getRandomRegion() {
        return Math.floor(Math.random() * 100) + 1
      }
    }
  }
```

<!--s-->

### Template literals

Template literals are string literals allowing embedded expressions.

<!--v-->

#### ES5

```javascript
  function getLuckyNumber() {
    var luckyNumber = Math.floor(Math.random() * 9) + 1;
    return "Your lucky number is " + luckyNumber + " !!!!";
  }
```

<!--v-->

#### ES6

```javascript
  function getLuckyNumber() {
    var luckyNumber = Math.floor(Math.random() * 9) + 1;
    return `Your lucky number is ${luckyNumber} !!!!`;
  }
```

<!--s-->

### Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

<!--v-->

#### ES5

```javascript
  function calc() {
    return {
      add : function (a, b) {
        return a + b;
      },
      sub : function (a, b) {
        return a - b;
      }
    }
  }

  var add = calc().add;
  add(4, 5); //9

  var operators = ["+", "-"];
  var addOperator = operators[0]; //+
```

<!--v-->

#### ES6

```javascript
  function calc() {
    return {
      add : function (a, b) {
        return a + b;
      },
      sub : function (a, b) {
        return a - b;
      }
    }
  }

  var { add } = calc();
  add(4, 5); //9

  var [addOperator, subOperator] = ["+", "-"];
```

<!--s-->

### Block Scope

`const` and `let` introduces block scoping in javascript.

<!--v-->

#### ES5

```javascript
  var PI = 3.14; //PI can be modified
  var global = 10;

  if (global) {
    var global = 100;
  }

  console.log(global * PI); // 100

  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i); // 10, 10, 10, ....
    }, 1000);
  }
```

<!--v-->

#### ES6

```javascript
  const PI = 3.14; //PI cannot be modified
  let global = 10;

  if (global) {
    let global = 100;
  }

  console.log(global); // 100

  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i); // 0, 1, 2, ....
    }, 1000);
  }
```

<!--s-->

### Arrow Functions

An arrow function expression has a shorter syntax compared to function expressions and does not bind its own this, arguments, super, or new.target. Arrow functions are always anonymous. These function expressions are best suited for non-method functions and they can not be used as constructors.

<!--v-->

#### ES5 - Simple Function

```javascript
  var add = function (a, b) {
    return a + b;
  }
  var sub = function (a, b) {
    return a - b;
  }
  console.log(add(2, 3)); //5
  console.log(sub(5, 3)); //2
```

<!--v-->

#### ES6 - Shortcut Notation

```javascript
  var add = (a, b) => {
    return a + b;
  }
  var sub = (a, b) => a - b;
  console.log(add(2, 3)); //5
  console.log(sub(5, 3)); //2
```

<!--v-->

#### ES5 - Constructor Binding

```javascript
  var Greeting = function (name) {
    var self = this;
    this.name = name;
    this.sayHello = function () {
      return 'Hello ' + this.name + ' !!!';
    }
    this.sayHelloAsync = function () {
      setTimeout(function () {
        return 'Hello ' + self.name + ' !!!';
      }, 1000);
    }
  }
  var g = new Greeting('Jon');
  g.sayHello(); //Hello Jon !!!
  g.sayHelloAsync(); //Hello Jon !!!
```

<!--v-->

#### ES6 - Constructor Lexical Binding

```javascript
  var Greeting = function (name) {
    this.name = name;
    this.sayHello = () => {
      return `Hello ${this.name} !!!`;
    }
    this.sayHelloAsync = () => {
      setTimeout(() => {
        return `Hello ${this.name} !!!`;
      }, 1000);
    }
  }
  var {sayHello, sayHelloAsync} = new Greeting('Jon');
  sayHello(); //Hello Jon !!!
  sayHelloAsync(); //Hello Jon !!!
```

<!--s-->

### Classes

JavaScript classes introduced in ECMAScript 6 are syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

<!--v-->

#### ES5

```javascript
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
```

<!--v-->

#### ES6

```javascript
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
```

<!--s-->

### Generators

Generators are functions that can be paused and resumed. This helps with many applications: iterators, asynchronous programming, etc.

<!--v-->

#### ES5

```javascript
  var getPaymentHistory = function (year) {
    var fetchHistory = function (year) {
      return 'History for ' + year + ' is ....';
    }
    return fetchHistory(year);
  }

  var validate = function (token) {
    if (token === 111) {
      return true;
    } else {
      return false;
    }
  }

  var token = 111;
  var year = 2011;
  var isValid = validate(token);
  if (isValid) {
    var history = getPaymentHistory(year);
    console.log(history);
  }
```

<!--v-->

#### ES6

```javascript
  var getPaymentHistory = function* (token) {
    var validate = function (token) {
      if (token === 111) {
        return true;
      } else {
        return false;
      }
    }

    var fetchHistory = function (year) {
      return `History for ${year} is ....`;
    }

    var nextInput = yield(validate(token));
    yield(fetchHistory(nextInput));
  }

  var token = 111;
  var year = 2011;
  var iterator = getPaymentHistory(token);
  var isValid = iterator.next();
  if (isValid.value) {
    var history = iterator.next(year);
    console.log(history);
  }
```
