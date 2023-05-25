// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

for (var sheep =1; sheep <=200; sheep ++) { 

  console.log("Counting sheep number:", sheep);
  if (sheep % 105 == 0)		
    {console.log("Fizz Buzz Boom");
    $("#output").append("<div>"+"Fizz Buzz Boom")}

  else if (sheep % 15 == 0)
    {console.log("Fizz Buzz"); 
    $("#output").append("<div>"+"Fizz Buzz")}


  else if (sheep % 3 == 0)
    {console.log("Fizz");
    $("#output").append("<div>"+"Fizz")}
    
  else if (sheep % 5 == 0)		
    {console.log("Buzz");
    $("#output").append("<div>"+"Buzz")}

  else if (sheep % 7 == 0)		
    {console.log("Boom");
    $("#output").append("<div>"+"Boom")}
  
  else {console.log(sheep);
  $("#output").append("<div>"+ sheep)}
  
}

//loop
//if mutliple of 3

