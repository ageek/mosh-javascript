console.log(sum(1, 2, 3, 4, 5));

// function declarations are hoisted to the top, hence can be invoked even before defition
// function sum(a, b) {

function sum() {
  let total = 0;
  for (var x of arguments) total += x;
  return total;
}
