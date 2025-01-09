function Shape() {}

Shape.prototype.duplicate = function () {
  // only availabe when we have a Circle child
  if (this.radius) {
    console.log("duplicate" + this.radius);
  } else {
    // otherwise , redius is undefined so just display duplicate
    console.log("duplicate");
  }
};

function Circle(radius) {
  this.radius = radius;
}

// this was implicit
// Circle.prototype = Object.create(Object.prototype);

//to inherit from Shape, we change the parent from Object to Shape as below
Circle.prototype = Object.create(Shape.prototype);

//as a best practive we should restore the constructor to Circle
Circle.prototype.constructor = Circle;

// this should be declared after resetting the Parent for Circle
Circle.prototype.draw = function () {
  console.log("draw " + this.radius);
};
const c1 = new Circle(1);
c1.draw();

const s = new Shape();
s.duplicate();

const c = new Circle(2);
c.draw();
c.duplicate();
