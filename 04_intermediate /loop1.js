'use strict'
//for of loop
//["","",""]
//[{},{},{}]
/*

const arr = [1,2,3,4,5];;

for(const iterator of object)
{
    console.log(num);
}

for(const num of arr)
{
    console.log(num);
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")

console.log(map);

//loop at map

//destructure of array 
for(const [key,value] of map){
    console.log(key,value);
}

//this feature is not work in object
there are different way of access
*/
//for object
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by Apple'
}
//forin loop

for (const key in myObject) {
    console.log(key);  //all key
    console.log(myObject[key]); //all value
}

//it also work with array
