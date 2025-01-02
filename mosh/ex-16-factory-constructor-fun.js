const address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = createAddress("a", "b", "c");
const address2 = new Address("a", "b", "c");

showAddress(address1);
showAddress(address2);
