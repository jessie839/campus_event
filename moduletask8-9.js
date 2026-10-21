var book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 15
};

book.price = 18;
console.log(book);

var user = {
  name: "Jessita",
  address: {
    city: "Colombo"
  }
};

console.log(user.address.city);

var products = [
  { name: "Notebook", price: 5 },
  { name: "Pen", price: 2 },
  { name: "Bag", price: 20 }
];

products.forEach(function (product) {
  console.log(product.name);
});

var student = {
  name: "Jessita",
  course: "Web Development",
  year: 1
};

var { name, course } = student;
console.log(name, course);

var firstList = ["Tech Fest", "Sports Meet"];
var copiedList = [...firstList];
var secondList = ["Cultural Day"];
var allEvents = [...firstList, ...secondList];

console.log(copiedList);
console.log(allEvents);

function addNumbers(...values) {
  var total = 0;
  for (var value of values) {
    total += value;
  }
  return total;
}

console.log(addNumbers(10, 20, 30));

var missingUser = {};
var city = missingUser.address?.city ?? "City not available";
console.log(city);