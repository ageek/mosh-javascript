function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);
circle1.draw();

const circle2 = new Circle(2);
circle2.draw();
