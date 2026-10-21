var campusName = "Campus Events";

function showCampus() {
  console.log(campusName);
}

showCampus();

if (true) {
  let blockName = "Jessita";
  var blockCourse = "Web Development";
  console.log(blockName);
}

console.log(blockCourse);
console.log(typeof blockName);

function checkVar() {
  console.log(varValue);
  var varValue = "hello";
}

function checkLet() {
  try {
    console.log(letValue);
  } catch (error) {
    console.log(error.name);
  }
  let letValue = "hello";
}

checkVar();
checkLet();

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());