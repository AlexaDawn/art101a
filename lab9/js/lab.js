// index.js - Lab 9
// Author: Alexa Marquez
// Date: 10 May

// Constants

// Functions
challengesEl = 
document.getElementById("challenge");
console.log("define challenge");

problemsEl = 
document.getElementById("problems");
console.log("define problems");

outputEl = 
document.getElementById("output");
console.log("Define outputEl");

new1El = 
document.createElement("p");
new1El.innerHTML = "Hey";
console.log("Birthing new1El")

var new2El = 
document.createElement("p");
new2El.innerHTML = "Over here";
console.log("Birthing new2El");

setTimeout(function()  {
  outputEl.appendChild(new1El),
  console.log("Append new1EL")
}, 2500);

setTimeout(function()  {
  outputEl.appendChild(new2El),
  console.log("Append new2EL")
}, 5000);

