fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data successfully fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    console.log("Fetch operation completed.");
  });
