'use strict'
//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 //10
val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10
/* 
This operator is particularly useful when you want to provide 
a default value for variables that might be explicitly set to
null or undefined while allowing other falsy values like 0 to
be used as-is. It helps avoid unintentional fallbacks when 
dealing with falsy values other than null or undefined.
*/

/*
const username = null;
const displayName = username ?? "Guest";
console.log(displayName);  // Output: "Guest"

const count = 0;
const defaultCount = count ?? 42;
console.log(defaultCount);  // Output: 0

*/

//terniary operator
//condition ? true : false