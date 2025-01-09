var x=32; 
var y=44;
var radius=5;

var centerX=0;
var centerY=0;
var width=600;
var height=400;

function setup(width, height) {
  centerX = width / 2;
  centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}   

function circleArea(radius) {
  return Math.PI * radius * radius;
}


setup(width, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
console.log("Area: " + area);
console.log("Distance: " + distance);

// What will be the output of the code above?