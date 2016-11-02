// ES6
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
