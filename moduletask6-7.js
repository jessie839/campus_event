function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log("Total:", calculateTotal(200, 3));

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Jessita");

var eventNames = [
  "Tech Fest",
  "Cultural Day",
  "Sports Meet",
  "Hackathon",
  "Workshop"
];

console.log("Array length:", eventNames.length);

var numbers = [5, 12, 8, 15, 9, 20];
var filteredNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log("Filtered numbers:", filteredNumbers);

var doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log("Doubled numbers:", doubledNumbers);

var total = [20, 30, 40].reduce(function (sum, num) {
  return sum + num;
}, 0);

console.log("Reduce total:", total);

console.log("Methods that change the original array:");
console.log("push(), pop(), shift(), unshift(), splice(), sort(), reverse() change the original array.");
console.log("filter(), map(), slice() do not change the original array; they return a new array.");
console.log("reduce() does not change the original array either; it returns a single value.");
