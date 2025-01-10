// fetch API retursn a Promise
const id = Math.ceil(Math.random() * 100) % 100;
console.log(id);
// for error:
// fetch(`https://jsonplaceholder.typicode.com/todos/${id}0`)

// for random value
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  // response.json() returns a Promise
  .then((response) => {
    if (!response.ok)
      throw new Error(`Network response was not ok: ${response.status}`);
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
