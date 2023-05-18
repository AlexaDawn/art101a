// index.js - Lab 11 - Jquery
// Author: Alexa Marquez
// Date: 17 May

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.

$("#challenge").append("<button id='challenge-button'>Button</button>");
console.log("Create Challenge Button");
$("#problem").append("<button id='problem-button'>Button</button>");
console.log("Create Problem Button");
$("#results").append("<button id='results-button'>Button</button>");
console.log("Create Results Button");





$("#challenge-button").click(function(){
  $("#challenge").toggleClass("small");
  console.log("Toggle Challenge");
})

$("#problem-button").click(function(){ 
  $("#problem").toggleClass("new");
  console.log("Toggle Problem");
  $("#problem").css("color", "cyan");
  console.log("Change Problem Color");
})

$("#results-button").click(function(){
  $("#results").toggleClass("special");
  console.log("Toggle Results");
})
  