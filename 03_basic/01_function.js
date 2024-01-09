'use strict'
//............Function in javaScript..........
//function is a block of code...and use the block multiple time
sayMyName();  //kishan
//function declaration ..this is normal function
function sayMyName(){
    console.log("kishan");
}
//function calling
sayMyName();  //kishan

function addTwoNumber(number1,number2) //paramiter
{
    return number1+number2
}

let result = addTwoNumber(5,6) //argument
console.log(result);

function loginUserMessage(username = "Rahul"){
    return `${username} just logged in`
}

console.log(loginUserMessage("kishan"))
//kishan just logged in
//if we not pass any value so result is
//undefined just logged in


//............when unlimited argument comes.......hqndle using rest operator it is like spread operator
function calculateCartPrice(...num){
     return num
}

console.log(calculateCartPrice(200))
console.log(calculateCartPrice(200,400))
//[ 200 ]
//[ 200, 400 ] comes all value in the form of array

function calculateCartPrice1(val1,val2,...num){
    return num
}

console.log(calculateCartPrice1(200))
console.log(calculateCartPrice1(200,400,300,500))
//[]
//[ 300, 500 ]
