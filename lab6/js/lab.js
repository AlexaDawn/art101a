// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 1 May

// Variables
  //make, model, color, year, age
myTransport = ["bus", " walking ", " car"];

// create an object for my main ride
myMainRide = {
  make: "Suzuki",
  model: "Carry",
  color: "Teal",
  year: 1991,
  age: function() {
    return 2023 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, ".</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

