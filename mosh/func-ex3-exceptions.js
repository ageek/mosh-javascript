const number = [1, 2, 3, 1, 2, 33, 44, 1, 22, 2];

//using reduce
function countOccur(array, el) {
  if (!Array.isArray(array))
    throw new Error("Input is not an array, pls check");
  return array.reduce((a, c) => {
    // const occur = currentValue === element ? 1 : 0;
    // console.log(accumulator + " and " + occur);
    return a + (c === el ? 1 : 0);
  }, 0);
}

try {
  const count = countOccur(undefined, 2);
  console.log(count);
} catch (e) {
  console.error(e.message);
}
