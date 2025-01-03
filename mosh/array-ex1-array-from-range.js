const ArrayFromRange = (min, max) => {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
};

const numbers = ArrayFromRange(1, 10);
console.log(numbers);

const numbers2 = ArrayFromRange(-10, 3);
console.log(numbers2);
