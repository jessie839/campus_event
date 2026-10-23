console.log("One");
setTimeout(() => console.log("Two"), 500);
console.log("Three");

// The synchronous logs run before the timer callback, so the order is One, Three, Two.
console.log("Registration received"); 
setTimeout(() => console.log("Your registration is confirmed."), 1000);