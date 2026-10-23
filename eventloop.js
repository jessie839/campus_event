console.log("A");
setTimeout(()=>console.log("B"),0);
Promise.resolve().then(()=>console.log("C"));
console.log("D");
console.log("E");
const intervalId = setInterval(() => console.log("F"), 1000);
setTimeout(() => clearInterval(intervalId), 5000);