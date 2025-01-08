const products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

console.log(products);

// products.
function compareSold(colaA, colaB) {
  if (colaA.sold < colaB.sold) return -1;
  if (colaA.sold > colaB.sold) return 1;
  return 0;
}

function compareCalories(colaA, colaB) {
  if (colaA.calories < colaB.calories) return -1;
  if (colaA.calories > colaB.calories) return 1;
  return 0;
}

function compareName(colaA, colaB) {
  if (colaA.name < colaB.name) return -1;
  if (colaA.name > colaB.name) return 1;
  return 0;
}

console.log("Sort by Sold:-");
console.log(products.sort(compareSold));

console.log("Sort by Calories-");
console.log(products.sort(compareCalories));

console.log("Sort by Name-");
console.log(products.sort(compareName));
