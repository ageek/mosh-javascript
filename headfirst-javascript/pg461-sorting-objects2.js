class Product {
  constructor(name, calories, color, sold) {
    this.name = name;
    this.calories = calories;
    this.color = color;
    this.sold = sold;
  }
}

Product.prototype.compareBySold = function (other) {
  return this.sold - other.sold;
};

Product.prototype.compareByCalories = function (other) {
  return this.calories - other.calories;
};

Product.prototype.compareByName = function (other) {
  return this.name.localeCompare(other.name);
};

const products = [
  new Product("Grapefruit", 170, "red", 8200),
  new Product("Orange", 160, "orange", 12101),
  new Product("Cola", 210, "caramel", 25412),
  new Product("Diet Cola", 0, "caramel", 43922),
  new Product("Lemon", 200, "clear", 14983),
  new Product("Raspberry", 180, "pink", 9427),
  new Product("Root Beer", 200, "caramel", 9909),
  new Product("Water", 0, "clear", 62123),
];

console.log(products.compareBySold);
