// constructor function
function Circle(radius) {
  //instance member
  this.radius = radius;
}
//Prototype members (definiton pushed to base/parent )
Circle.prototype.draw = function () {
  console.log("Draw circle of radius:" + this.radius);
};

// override the base toString and add ccustom function
Circle.prototype.toString = function () {
  console.log("This is a circle of radius:" + this.radius);
};

const c1 = new Circle(11);
const c2 = new Circle(22);

c1.draw();
c2.draw();

c1.toString();
c2.toString();
