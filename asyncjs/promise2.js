function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data... wait for 2 sec");

    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}
//handle promise
fetchData()
  .then((result) => {
    console.log(`fetched result : ${result}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Finally");
  });
