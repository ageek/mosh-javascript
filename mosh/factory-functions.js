function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
circle1.draw();

const circle2 = createCircle(2);
circle2.draw();
