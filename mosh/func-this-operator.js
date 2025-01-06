// Imp  rules for 'this' keyword:

// for a method ( a function inside an object),
// 'this' -> refers to the object invoking the method

const person = {
  first: "John",
  function() {
    console.log(this.first);
  },
};

person.function();

// for a regular function (not in an object)
// 'this' -> refers to the global  Window object (in browser) or global object (in Node.js)
function message() {
  console.log(this);
}

console.log(message());

// tom@tombox:~/two/learn/mosh-javascript/mosh(main)$ node func-this-oprator.js
// John
// [Function: message]
// tom@tombox:~/two/learn/mosh-javascript/mosh(main)$ node func-this-oprator.js
// John
// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 71.22337099909782,
//       nodeStart: 3.082291007041931,
//       v8Start: 6.663704007863998,
//       bootstrapComplete: 56.238571003079414,
//       environment: 35.25005400180817,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1736153298347.839
//   },
//   fetch: [AsyncFunction: fetch]
// }
