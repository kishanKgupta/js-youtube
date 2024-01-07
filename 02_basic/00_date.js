//1 january 1970 , dates come in the form of milli-second
// new date api Temporal that manage date and time...tc3 

// let myDate = new Date()  //mydate is object
// console.log(myDate); //2024-01-07T19:11:09.374Z
// console.log(myDate.toString()); //Sun Jan 07 2024 19:12:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Jan 07 2024
// console.log(myDate.toISOString()); //2024-01-07T19:14:07.878Z
// console.log(myDate.toJSON()); //2024-01-07T19:15:04.817Z
// console.log(myDate.toTimeString()); //19:16:02 GMT+0000 (Coordinated Universal Time)

//premitive date...
let myCreatedDate = new Date(2023,0,23);
//console.log(myCreatedDate); //2023-01-23T00:00:00.000Z
//january start with zero..
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate1 = new Date("01-14-2023"); //mm-dd-yyyy
//console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now(); //value comes in milisecnd like that 1704655570331
//console.log(myTimeStamp);
//vale convert in second
//console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());