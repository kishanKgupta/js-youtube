//object using constructor ,singlton

//const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "kishan"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
//{ id: '123abc', name: 'kishan', isLoggedIn: false }

const obj1 = {1: "a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1,obj2}
//console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2)
//console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = {...obj1,...obj2}
//console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Array of object...
const users = [
    {
       name:"kishan",
       email:"kk@gmail.com"
    },
    {

    }
]
//console.log(users[0].email); //kk@gmail.com
//when we find the all key of ay object...
//console.log(Object.keys(obj4));
//value come inthe form of array [ '1', '2', '3', '4' ]
//console.log(Object.values(obj4));
//value come inthe form of array  [ 'a', 'b', 'c', 'd' ]

//console.log(Object.values(obj4[0])); it is throw error...
//console.log(Object.entries(obj4));
//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

//........destructure of object......
const course = {
    coursename:"JS in Hindi",
    price:"999",
    courseInstructor:"hitesh Sir"
}
//new way access
const {courseInstructor: master}=course
//console.log(courseInstructor);
console.log(master); //hitesh Sir

//we also use the concept of destructure for Array...
/*
//..................API in json......................
{
    "name": "kishan",
    "coursename": "js in hindi",
    "price": "free"
}
//array of object
[
    {},
    {},
    {}
]
*/