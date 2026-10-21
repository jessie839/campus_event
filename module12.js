//module 12
// Task 1: Click event to update status
let button = document.getElementById("btn");
let status = document.getElementById("status");
button.addEventListener("click", function () {
    status.textContent = "Button clicked successfully!";
});

// Task 2: Live character count
let input = document.getElementById("message");
let count = document.getElementById("count");
input.addEventListener("inp ut", function () {
    count.textContent = input.value.length;
});

// Task 3: Registration form without page reload

let form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

// Task 4: Error and success messages
    let result = document.getElementById("result");
    if (name === "" || email === "") {
        result.textContent = "Please fill in all fields!";
    } else {
        result.textContent = "Registration successful!";
    }
});