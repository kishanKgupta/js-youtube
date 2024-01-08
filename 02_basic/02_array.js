'use strict'
const marvel_heros = ["thor","spiderman","ironman"];
const dc_heros = ["superman","flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]

const allhero = marvel_heros.concat(dc_heros);
//console.log(allhero);
//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

//in this case use spread operator it's preferre
//spread operator is use to spread every value...

const all_new_heros = [...marvel_heros,...dc_heros];
//console.log(all_new_heros);
//[ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

//-----------------------------------------

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
//flat(depth) depth represente the depth of array 
//if we use infinity so it automatically check it

//console.log(real_another_array);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
// ]

// Array.isArray("kishan") check it is array ar not

//console.log(Array.isArray("kishan")); //false it check the value that it is array or not
//convert string into array
//console.log(Array.from("kishan"));
//[ 'k', 'i', 's', 'h', 'a', 'n' ]
//console.log(Array.isArray(Array.from("kishan")));//true

//if we convert object into string using Array.from()
//it so empty array because it confuse to show object that object contain pair value 

//console.log(Array.isArray("kishan"));
console.log(Array.from({})); //[]
console.log(Array.from({1:"kishan",2:"ram"})); //[] show the empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
