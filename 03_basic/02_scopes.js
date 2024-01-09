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
