var color = localStorage.getItem("color");

if (color === null) {
  color = "black";
  localStorage.setItem("color", color);
}

console.log("Favourite colour:", color);

var step = sessionStorage.getItem("step");

if (step === null) {
  step = 1;
} else {
  step = Number(step) + 1;
}

sessionStorage.setItem("step", step);
console.log("Step number:", step);

var books = ["The Hobbit", "Pride and Prejudice", "The Little Prince"];
localStorage.setItem("books", JSON.stringify(books));

var savedBooks = JSON.parse(localStorage.getItem("books"));
console.log(savedBooks);
