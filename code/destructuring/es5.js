// ES5
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
console.log(add(4, 5)); //9

var operators = ["+", "-"];
var addOperator = operators[0]; //+
console.log(addOperator);
