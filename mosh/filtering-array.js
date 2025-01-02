const numbers = [1, 2, 3, 4, 5, 6, -7, 3];

// const result = numbers.filter(function (value) {
//   return value >= 0;
// });

const result = numbers.filter((n) => n >= 0);
console.log(result);
