// ES6
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
