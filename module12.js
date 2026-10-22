
let button = document.getElementById("btn");
let status = document.getElementById("status");
button.addEventListener("click", function () {
    status.textContent = "Button clicked successfully!";
});

let input = document.getElementById("message");
let count = document.getElementById("count");
input.addEventListener("input", function () {
    count.textContent = input.value.length;
});


let form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let result = document.getElementById("result");
    if (name === "" || email === "") {
        result.textContent = "Please fill in all fields!";
    } else {
        result.textContent = "Registration successful!";
    }
});