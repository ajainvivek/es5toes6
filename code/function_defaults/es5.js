// ES5
function add(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
console.log(add(2, 3)); //5
console.log(add(2)); //2
