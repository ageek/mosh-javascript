const numbers = [1, -22, 2, 3, 4, 5, 6, -77, 49];
// const filtered = numbers.filter((n) => n >= 0);

// const mapped = numbers.map((n) => Math.sqrt(n));

// console.log(mapped);

// const items = numbers.map((n) => "<li>" + n + "</li>");

// const html = "<ul>" + items.join("") + "</ul>";

// console.log(html);

// const items2 = numbers.map((n) => ({ value: n }));

// console.log(items2);

// with chaining

const items = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
