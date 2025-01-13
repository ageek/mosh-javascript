function mixin(target, ...source) {
  Object.assign(target, ...source);
}
const canEat = {
  hunger: 10,
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};
//compost objects
// Object.assign(canEat, walk);

// canEat.eat();
// canEat.walk();

// console.log(canEat);

// const person = Object.assign({}, canEat, walk);
// console.log(person);

// const goldfish = Object.assign({}, canEat, canSwim);
// console.log(goldfish);

//using constructor function
function Person() {}

// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}
// Object.assign(Goldfish.prototype, canEat, canSwim);
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
