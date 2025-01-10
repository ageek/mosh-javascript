let p = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a >= 0.5) resolve("Success: Number greater than 0.5");
  else reject("failed: number < 0.5");
});

p.then((message) => {
  console.log(" in then block - " + message);
}).catch((message) => {
  console.log(" in catch block - " + message);
});
