// fetch API retursn a Promise
const id = Math.ceil(Math.random() * 100) % 10;
console.log(id);
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  // response.json() returns a Promise
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    else return response.json();
  })
  .then((data) => {
    console.log("Data successfully fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    console.log("Fetch operation completed.");
  });
