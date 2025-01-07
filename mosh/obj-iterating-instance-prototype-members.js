// constructor function
function Circle(radius) {
  //instance member
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}
//Prototype members (definiton pushed to base/parent )
Circle.prototype.draw = function () {
  console.log("Draw circle of radius:" + this.radius);
};

// override the base toString and add ccustom function
Circle.prototype.toString = function () {
  console.log("This is a circle of radius:" + this.radius);
};

c1 = new Circle(22);

// access instance members
console.log(Object.keys(c1));

// access instnce + prototype members - use for in loop
for (let key in c1) console.log(key);

//check owner type : own(true) or base (false)
console.log(c1.hasOwnProperty("radius"));
console.log(c1.hasOwnProperty("draw"));
