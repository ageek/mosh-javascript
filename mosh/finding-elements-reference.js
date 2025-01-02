const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "Hola" },
];

const course = courses.find(function (course) {
  return course.name === "xyz";
});

console.log(course);

const courseIndex = courses.findIndex(function (course) {
  return course.name === "Hola";
});

console.log(courseIndex);
