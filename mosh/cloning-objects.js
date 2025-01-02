function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);
circle1.draw();

// bare bones cloning
// const another = {};
// for (let key in circle1) {
//   another[key] = circle1[key];
// }

//using Object.assign
// const another = Object.assign(
//   {
//     color: "yellow",
//   },
//   circle1
// );

//using spread operator
const another = { ...circle1 };
console.log(another);
