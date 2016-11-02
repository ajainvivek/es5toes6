// ES6
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
console.log(add(4, 5)); //9

var  [addOperator, subOperator] = ["+", "-"];
console.log(addOperator);
