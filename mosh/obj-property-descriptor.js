let person = { name: "Jake", age: 27 };

Object.defineProperty(person, "name", {
  // change it to true to make the name property writable
  writable: false,

  //set to true (default value) to make it show under Object.keys()
  enumerable: false,

  // setting to false , will not allow property to be deleted
  configurable: false,
});

Object.defineProperty(person, "age", {
  writable: false,
  configurable: true,
});

person.name = "Luke";
console.log(person.name);

console.log(Object.keys(person));

delete person.name;
console.log(person.name);

person.age = 88;
console.log(person.age);

delete person.age;
console.log(person.age);
