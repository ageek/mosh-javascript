const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(77);
console.log(numbers);

const last = numbers.pop();
console.log(last);
console.log(numbers);

//
numbers.unshift(11);
console.log(numbers);

const first = numbers.shift();

console.log(first);
console.log(numbers);

// numbers.unsp;
numbers.splice(2, 1);
console.log(numbers);
