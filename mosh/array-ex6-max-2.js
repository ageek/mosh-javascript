const numbers = [11, 2, 13, 229, -998, -23, 34];
// const numbers = [-1, -22, -9, 0];
const max = getMax(numbers);

console.log(max);

function getMax(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator < currentValue ? currentValue : accumulator;
  }, array[0]);
}
