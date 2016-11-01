
<!--s-->

### What is EcmaScript2015(ES6)?

* Adds new features to Ecma 262 standards
* Engines can develop and support the features
* Kangax is our guide


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
  logger("ERROR", "Cannot read property"); //ERROR : Cannot read property
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

The spread syntax allows an expression to be expanded to comma separated values.

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
        name: "Sydney"
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
        name: "Sydney"
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

  var { addOperator, subOperator } = ["+", "-"];
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
