const numbers = [1, 2, 3, 4, 5, 6];

function move(array, index, offset) {
  let output = [];

  let jump_r = index + offset;
  if ((offset >= 0) & (jump_r < array.length)) {
    //remove the element
    el = array.splice(index, 1);
    console.log(el);
    console.log(array);
    //now insert the element
    array.splice(jump_r, 0, el[0]);
    console.log(array);
    return array;
  } else if ((offset < 0) & (index + offset >= 0)) {
    //remove element
    el = array.splice(index, 1);
    console.log(el);
    console.log(array);

    //now insert the element
    array.splice(index + offset, 0, el[0]);
    console.log(array);
    return array;
  } else {
    console.error("Invalid offset");
    return [];
  }
}

// const output = move(numbers, 2, 3);
const output = move(numbers, 2, -3);

console.log(output);
