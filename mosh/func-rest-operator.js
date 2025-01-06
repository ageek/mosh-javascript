function sum(discount, ...prices) {
  // console.log(args);
  const total = prices.reduce((a, b) => {
    return a + b;
  }, 0);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 40));
