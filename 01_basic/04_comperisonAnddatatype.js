"use strict";
console.log(1>0); //true
console.log(null>0); //false
console.log(null == 0); //false
console.log(null >= 0);  //true

/*
The reason is tat an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number , treating it as 0. 
*/

console.log(undefined>0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0);  //false

console.log("2"  > 1); //true
console.log("02" > 1); //true

/*
importante for interview datatype
there are two type of datatype in javascript
1.primitive
7type
String,number,Boolean,null,undefined,Symbol(unique),BigInt
2.Non-primitive(Referencetype)
Array,Objects,Functions
*/

const BigInt = 2236478654786489573895n; //this is a way to store big number...
console.log(BigInt);

//Array
const heros = ["shaktiman","nagraj","doga"];
//object
let myObj = {
    name:"kishan",
    age:22,
}
//function
const myFunction = function(){
    console.log("Hello world");
}

//find data type using typeof
console.log(typeof (myFunction));//function
console.log(typeof heros);//object
console.log(typeof myObj);//object
//null =>object
//undefined =>undefined

//------------------MEMORY---------------
//stack (primitive datatype).......work with pass by value ,created copy
//heap (non-primitive datatype)......work with pass by reference ,no created any copy


