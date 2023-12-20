"use strict";
console.log("conversion operation");
let numvariable = 33;
let numString = "33";
console.log(typeof numvariable);  //number
console.log(typeof numString);  //string

let convertNum = Number(numString);
console.log(typeof convertNum);

let score = true;
console.log(Number(score));

let num = 10
let stringNum = String(num);
console.log(typeof stringNum); //string

//Number("33abc") => type-Number , value-NaN
//The Numeric value of null is zero
//The Numeric value of undefined is NaN
//The Numeric value of true is 1



// console.log(typeof numvariable);
// let stringNum = String(numvariable);
// console.log(typeof stringnum);