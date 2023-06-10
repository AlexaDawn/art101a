// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 6 June 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.


$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/info.0.json",
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      var comicObj = data;
      $("#output").html("<h2>" + comicObj.title + "</h2>")
      $("#output").append("<img src=' " + comicObj.img + " '>");
      $('#output > img').attr('title', comicObj.alt);
      console.log("xkcd #" + comicObj.num + " - " + comicObj.month + "/" + comicObj.day + "/"+ comicObj.year);
      console.log("Title: " + comicObj.title)
      console.log("Image: " + comicObj.img)
      console.log("Alt: " + comicObj.alt)
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})