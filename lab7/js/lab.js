// index.js - purpose and description here
// Author: Alexa Marquez
// Date: 3 May 2023

// Constants

// Functions
function NameSorter() {
  var userName = window.prompt("Hi. Let me alphebatize your name!");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArray.sort=", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join();
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

document.writeln("Here's your alphabetized name: ", 
  NameSorter(), "</br>");