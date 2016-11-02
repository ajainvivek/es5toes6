// ES6
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
console.log(logger("ERROR", errors...)); //ERROR : Cannot read property, product is not defined
