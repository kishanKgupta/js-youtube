'use strict'
//() parenthesis 
//[] brackets
//{} curly breses

const array = [0,1,2,3,4,5]
const myHero = ["shaktiman",'naagraaj'];
const mix = ['A',"ok",123];

//we add diffrente type of value in array...
for(let i=0;i<array.length;i++)
{
   // console.log(array[i]);
}

//shallow copy
//deep copy

//array contain to many methods and properties...

const numbers = [1,2,3,4];
//console.log(numbers[1]);
//push() push value in end
//pop() pop value
//unshift() push value in start
//shift() remove value in start
//includes() true ar false
//indexOf() give index of value if not present give -1
const newArr = numbers.join(); //Array convert into string
//console.log(numbers);
//console.log(newArr);

//slice splice most importante in interview
//Difference between slice and splice
// if we use slice like arr.slice(1,3) => value show present at indexNumber 1 and 2 
//and it not change in original array..
//but we use splice like arr.splice(1,3) => value show present at indexNumber 1,2 and 3 also
//and change in original array only available value in array except 1,2,3


let myArr = [1,2,3,4,5,6];
console.log("A "+myArr);

console.log(myArr.slice(1,4));
console.log("B "+myArr);

console.log(myArr.splice(1,4));
console.log("C "+myArr);
/*
A 1,2,3,4,5,6
[ 2, 3, 4 ]
B 1,2,3,4,5,6
[ 2, 3, 4, 5 ]
C 1,6
 */