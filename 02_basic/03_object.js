'use strict'
//we declare object in two way first is in literals(no singlton) and second in constructor(singleton)

//object literals
const mysym = Symbol("key1");

const jsuser = {} //empty object
const jsuser1 = {
    name:"kishan",
    add:"reoti",
    [mysym]:"mykey1",
    age:20,
    email:"kkgupta@gmail.com",
    hobbies:["singing","reading books"],
    education:{
        highschool:2016,
        inter:2018,
        gradutation:2020
    }
}
console.log(jsuser1);
console.log(jsuser1.education); //chaining
//also access in another way
console.log(jsuser1["email"]); //it is useful when our key is in form of string like that "email"

//create a symbol and add on object
console.log(jsuser1[mysym]); //mykey1
console.log(typeof mysym); //symbol

//if we change the value of object normally overright
jsuser1.email = "kishangupta01@gmail.com"

//when we want that someone not to change the value of object
//so simply use freeze method 
//when we use freeze method and change the value so it's not show any error but not change the value 
Object.freeze(jsuser1);

//in object we also include function
//reference same object using this keyword
