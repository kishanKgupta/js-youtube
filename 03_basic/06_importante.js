'use strict'
//why use 'use strict' in javaScript

//javaScript Execution Context
//1..global execution context-----
//what is global execution context in browser and nodejs environment
//for browser = window object ,,,,
//javaScript work as a single thread
//2..Function execution context
//3..Eval execution context
//.............................
//execute javaScript code in two phase...
//1..memory creation phase
//2..execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

/*
//now to describe how to execute the code
step1..global execution -> this
stpe2..memory creation phase -> collect variable 
val1 = undefined
val2 = undefined
addnum -> definition of function
result1 = undefined
result2 = undefined

step3..execution phase
val1 = 10
val2 = 5
addNum = executional context ..........new variable environment + execution thread all step again for it
    //--stpe2..memory creation phase -> collect variable 
  val1 = undefined
  val2 = undefined
  total = undefined
    //...step3..execution phase
   num1 = 10
   num2 = 5
   total => 15
   return value in global execution context
   delete context
  //now again start execution phase
  result1 = 15
  result = 12
  
  
  //call statck
  also check in browser sourse and make snippet....
*/

