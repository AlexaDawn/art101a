// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementById("output");
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});



