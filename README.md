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

<!--v-->

#### ES5 => Problem

```javascript
  function add(x, y) {
    return x + y;
  }
  add(2, 3); //5
  add(2); //NaN
```

<!--v-->

#### ES5 => Solution

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

#### ES6 => Solution

```javascript
  function add(x=0, y=0) {
    return x + y;
  }
  add(2, 3); //5
  add(2); //2
```

<!--s-->

### Rest Parameters

<!--v-->

#### ES5 => Problem

```javascript
  function logger(type, log) {
    return type + " : " + log;
  }
  logger("ERROR", "Cannot read property"); //ERROR : Cannot read property
  logger("ERROR", [{
    "severity" : "high",
    "message" : "Cannot read property"
  }]); //ERROR : [object Object]
```

<!--v-->

#### ES5 => Solution

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
  logger("ERROR", [{
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }]); //ERROR : Cannot read property, product is not defined
```

<!--v-->

#### ES6 => Solution

```javascript
  function logger(type, ...logs) {
    var messages = [];
    for (var i = 0; i < logs.length; i++) {
      messages.push(logs[i].message);
    }
    return type + " : " + messages;
  }
  logger("ERROR", "Cannot read property"); //ERROR : Cannot read property
  logger("ERROR", [{
    "severity" : "high",
    "message" : "Cannot read property"
  }, {
    "severity" : "high",
    "message" : "product is not defined"
  }]); //ERROR : Cannot read property, product is not defined
```
