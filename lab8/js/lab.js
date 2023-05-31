// index.js - purpose and description here
// Author: Alexa Marquez
// Date:

// Constants

// Functions
function square(x){
  return (x ** 2);
}
  // some code here
  // return results;
// this is an example function and this comment tells what it doees and what parameters are passed to it.
console.log("What is 21 squared?", square(21));
console.log("What is 69 squared?", square(69));

numbers = [69, 7, 62, 2, 63, 42,]
console.log("My numbers: ", numbers);
$("#output").append("<div>"+ "My numbers: " + numbers);

var result = numbers.map(square);
console.log("My numbers squared: ", result);
$("#output").append("<div>"+ "My numbers squared: " + result);

var result2 = numbers.map(function(x){
  return x + x;
})

console.log("The double of each number", result2);
$("#output").append("<div>"+ "The double of each number: " + result2);

