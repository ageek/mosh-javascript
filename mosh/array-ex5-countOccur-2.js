const number = [1, 2, 3, 1, 2, 33, 44, 1, 22, 2];

let count = 0;

//using reduce
function countOccur(array, element) {
  return array.reduce((accumulator, currentValue) => {
    const occur = currentValue === element ? 1 : 0;
    // console.log(accumulator + " and " + occur);
    return accumulator + occur;
  }, 0);
}

console.log(countOccur(number, 2));
