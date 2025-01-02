const numbers = [11, 22, 33, 44, 55];

let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

//using reduce
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum2);

//shorter frm of reduce
const sum3 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum3);
