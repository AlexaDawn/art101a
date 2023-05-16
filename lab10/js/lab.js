// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 15 May 2023

// Constants

// Functions

function sortMe(str) {
	return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input their name with the prompt() function. 
  //var name = prompt("What is your name?");
  var name = document.getElementById("getit").value;
  var nameStr = "Hello, " + sortMe(name);
  // change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
  var helloEl = document.getElementById("output");
  helloEl.innerHTML = nameStr;
})


var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementById("output");
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
