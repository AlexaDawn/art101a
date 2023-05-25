// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 22 May 2023

// Constants

// Functions

//$("#button").click(function(){
//  var name = #("input").val();
//  $("output").append("<p>"+ name);
//})

//Return Merill, Cowell, Porter, Rachel Carson, John R. Lewis, College 9, Oakes, Kresge, Stevenson, Crown
//depending on on length mod 10

function sortingHat(str) {
  len = str.length;
  mod = len % 10;
  if (mod == 0) {
    return "Merill"
  }
  else if (mod == 1) {
    return "Cowell"
  }
  else if (mod == 2) {
    return "Porter"
  }
  else if (mod == 3) {
    return "Rachel Carson"
  }
  else if (mod == 4) {
    return "John R. Lewis"
  }
  else if (mod == 5) {
    return "College 9"
  }
  else if (mod == 6) {
    return "Oakes"
  }
  else if (mod == 7) {
    return "Kresge"
  }
  else if (mod == 8) {
    return "Stevenson"
  }
  else if (mod == 9) {
    return "Crown"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var college = sortingHat(name);
  newText = "<p>You've been selected to join " + college + "!</p>";
  document.getElementById("output").innerHTML = newText;
}
)