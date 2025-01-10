function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data... wait for 2 sec");

    setTimeout(() => {
      const success = Math.random() >= 0.5 ? true : false;
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
