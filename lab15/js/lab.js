// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 31 May

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.


function getStuff() {
	console.log("Clicked");
  $.ajax({
    url: "https://www.boredapi.com/api/activity/",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    console.log(data.activity);
    $("#output").html("<h2>"+ data.activity);
  })
}

$("#activate").click(getStuff);