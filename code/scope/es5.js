// ES5
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
