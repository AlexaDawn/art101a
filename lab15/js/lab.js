// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 31 May

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.

function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://yerkee.com/api/cookie",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    console.log(data);
    var answer = data.answer;
    var imgURL = data.image;
    $("#output").html("<h2>" + answer);
    $("#output").append("<img src=" + imgURL + ">");
  })
}

$("button").click(getStuff);