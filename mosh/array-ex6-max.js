const numbers = [1, 2, 33, 32, 45, 7, -11];

function getMax(array) {
  if (array.length == 0) return undefined;

  // else
  let max = array[0];
  for (let x of array) {
    if (max < x) max = x;
  }
  return max;
}

console.log(getMax(numbers));
