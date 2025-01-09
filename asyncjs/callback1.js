function greet(name, callback) {
  console.log(`Hello ${name}!`);
  callback();
}

function goodbye() {
  setTimeout(() => {
    console.log("after 2 secs: Goodbye!");
  }, 2000);
}

greet("Tom", goodbye);

// callbacks are integral to handling asynchronous operations, user interactions,
// and events in JavaScript. They help manage the flow of execution in a non-blocking
// manner, making applications more responsive and efficient
