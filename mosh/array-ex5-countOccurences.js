const number = [1, 2, 3, 1, 2, 4, 5, 2, 3, 4, 6, 11, 222];

function countOccurrences(array, element) {
  let count = 0;
  if (!array.includes(element)) {
    return 0;
  }
  for (let e of array) {
    if (e === element) count++;
  }
  return count;
}

console.log(countOccurrences(number, -11));
