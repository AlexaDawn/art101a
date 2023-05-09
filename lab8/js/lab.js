// index.js - purpose and description here
// Author: Alexa Marquez
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function square(x){
  return (x ** 2);
}
  // some code here
  // return results;
console.log("What is 21 squared?", square(21));
console.log("What is 69 squared?", square(69));

numbers = [69, 7, 62, 2, 63, 42,]
console.log("My numbers: ", numbers);

var result = numbers.map(square);
console.log("My numbers squared: ", result);

var result = numbers.map(function(x){
  return x + x;
})

console.log("The double of each number", result);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = mapResults; // put your results here