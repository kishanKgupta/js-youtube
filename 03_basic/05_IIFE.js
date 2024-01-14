//IIFE = immediately invoked function expressions
// An Immediately Invoked Function Expression (IIFE) is a JavaScript
//  design pattern that involves creating a function expression and 
//  immediately invoking it. This pattern 
// is often used to create a private scope for variables and functions
//  to avoid polluting the global scope.

var outsideVar = "I am a global variable.";

(function() {
  var localVar = "I am a local variable.";
  console.log(outsideVar); // Accessing global variable
  console.log(localVar);    // Accessing local variable
})(); //use semicolon 

(() => {
  console.log("Shri Ram")}
)();

((name) => {
    console.log(`welcome ${name}`)}
  )("kishan");


console.log(outsideVar); // Accessing global variable outside the IIFE
// console.log(localVar); // This would result in an error, as localVar is not defined in this scope
