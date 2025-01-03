const numbers = [1, 2, 3, 4, 5, 6];

function move(array, index, offset) {
  let output = [...array];
  let jump = index + offset;

  //   console.log(jump);
  if (jump >= output.length || jump < 0) {
    console.error("Invalid offset");
    return;
  }

  el = output.splice(index, 1);

  output.splice(jump, 0, el[0]);
  return output;
}

console.log(numbers);
// const output = move(numbers, 2, 3);
const output = move(numbers, 5, -4);

console.log(output);
