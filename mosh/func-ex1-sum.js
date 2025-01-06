//
/**
 * Calculates the sum of numbers.
 * It can accept either a list of numbers as arguments or an array of numbers.
 * @param {...number | number[]} args - A list of numbers or an array of numbers to sum.
 * @returns {number} The sum of the numbers.
 */

// rest operator converts everything passed to its function into an Array
function sum(...args) {
  // If the first argument is an array, sum the elements of the array
  if (Array.isArray(args[0])) {
    return args[0].reduce((a, b) => {
      return a + b;
    }, 0);
  }
  return args.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum([1, 2, 3, 4, 5]));
