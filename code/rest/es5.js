// ES5
function logger() {
  var type = arguments[0];
  var messages = [];
  for (var i = 1; i < arguments.length; i++) {
    messages.push(arguments[i].message);
  }
  return type + " : " + messages;
}
console.log(logger("ERROR", {
  "severity" : "high",
  "message" : "Cannot read property"
}, {
  "severity" : "high",
  "message" : "product is not defined"
})); //ERROR : Cannot read property, product is not defined
