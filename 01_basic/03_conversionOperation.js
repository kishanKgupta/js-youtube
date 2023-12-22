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

console.log("1" + 2);  //12
console.log(2 + "1");  //21
console.log("1" + 2 + 2); //122
console.log(1 + 2 +  "2"); //32
console.log(1 + "2" + 3);
console.log(true);  //true
console.log(+true); //1
console.log(true+1);  //2
//-------------------------------
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//-------------------------------

//postfix
let x1 = 3;
const y1 = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

//prefix
let x3 = 3;
const y3 = ++x;
// x is 4; y is 4

let x4 = 3n;
const y4 = ++x2;
// x2 is 4n; y2 is 4n

