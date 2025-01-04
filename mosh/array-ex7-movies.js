const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "A", year: 2018, rating: 4.1 },
  { title: "d", year: 2017, rating: 4.5 },
];

const result = movies.filter((movie) => {
  return movie.year === 2018 && movie.rating > 4;
});

result.sort((a, b) => {
  if (a.rating < b.rating) return 1;
  if (a.rating > b.rating) return -1;
  return 0;
});

// console.log(result);

result2 = result.map((movie) => {
  return movie.title;
});

console.log(result2);

// ============ compact way
const titles = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
