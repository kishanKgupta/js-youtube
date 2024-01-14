'use strict'
//global and local scope
//block level scope

// let a = 10
// const b=20
// var c = 30
let a = 100
const b = 70
if(true){
    let a = 10
    const b=20
    var c = 30
}

console.log(a) // a is not access
console.log(b)
console.log(c)
// 100
// 70
// 30

//--------------hoisting in javascript------------------

func(5); //it is work
function func(num){
    return num+1;
}

//when we use function expression so it will not work
//addTwo(5)
const addTwo = function(num){
    return num+2
}

