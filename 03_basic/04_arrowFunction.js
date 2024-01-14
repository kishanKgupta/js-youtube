'use strict'
const user = {
    username: "kishan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        //In JavaScript, "this" is a keyword
        //that refers to the current execution context.
        //The value of "this" depends on how a function is called.
    }
}
user.welcomeMessage(); //kishan welcome to website
user.username = "Dhiraj";
user.welcomeMessage(); //Dhiraj welcome to website
console.log(this); //{} when we run this command at browser so result is different window object it is global{.........};
//in node environment this not contain any object

function chai(){
    console.log(this);
}
chai(); //undefined

const chai1 = () => {
    let username = "kishan"
    console.log(this.username); //undefined
}
chai1();
//Arrow function....
(num1,num2) => {
   return num1+num2;
}

const addNum = (num1,num2,num3) => {
    return num1+num2+num3;
 }

console.log((20,30)) //50
console.log(addNum(20,330,40)) //390