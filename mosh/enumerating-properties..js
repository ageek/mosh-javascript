function Cicle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Cicle(1);
circle1.draw();

for (let key in circle1) {
  console.log(key, circle1[key]);
}
for (let key in Object.keys(circle1)) {
  console.log(key);
}

for (let key of Object.entries(circle1)) {
  console.log(key);
}

if ("radius" in circle1) {
  console.log("Circle has a radius");
}
