console.log("start"); // Synchronous
setTimeout(() => console.log("timer"), 0); // Task (macrotask)
Promise.resolve().then(() => console.log("promise")); // Microtask
console.log("finish"); // Synchronous

// Output:
// start
// finish
// promise
// timer
//
// The synchronous statements run first. The promise callback is queued as a
// microtask, which runs before the setTimeout task.