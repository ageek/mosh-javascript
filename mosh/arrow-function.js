const courses = [
  { id: 1, name: "aa" },
  { id: 2, name: "bb" },
  { id: 3, name: "cc" },
];

const course = courses.find(function (course) {
  return course.name === "cc";
});

console.log(course);

const course2 = courses.find((course) => {
  return course.name === "bb";
});

console.log(course2);
