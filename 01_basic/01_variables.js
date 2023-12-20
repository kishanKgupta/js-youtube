"use strict";//treat all js code as newer version
const accountId = 12345;
let accountPassword = "kkgupta";
var accountEmail = "kkgupta@gmail.com";

//alert() function not work where because we are using nodeJs, not browser

// Difference between let and var ?
/*
In JavaScript, both let and var are used to declare variables, but they have some key differences in terms of scoping and hoisting.

Scope:

var: Variables declared with var are function-scoped. This means that the variable is only available within the function where it is declared. If a variable is declared using var outside any function, it becomes a global variable.
let: Variables declared with let are block-scoped. This means that the variable is only available within the block (enclosed by curly braces) where it is declared. Block scope includes if statements, loops, and any other code block.
Hoisting:

var: Variables declared with var are hoisted to the top of their function or global scope. This means that you can use the variable before it is declared in the code, but its value will be undefined until the actual declaration is encountered during runtime.
let: Variables declared with let are also hoisted, but they are not initialized. This is known as the "temporal dead zone." If you try to access the variable before the declaration statement, you will get a ReferenceError.
Re-declaration:

var: You can re-declare a variable using var within the same scope without any error.
let: If you try to re-declare a variable with the same name using let within the same scope, it will result in an error.

*/
// Difference between undefined and null ?

/*

In JavaScript, undefined and null are two distinct values that represent the absence of a meaningful value. While they are often used interchangeably, they have different use cases and meanings.

undefined:

If a variable is declared but has not been assigned a value, it is undefined by default.
Function parameters that are not provided with an argument will have the value undefined.
If you try to access an object property that does not exist, the result is undefined.
The result of an omitted return statement or a variable that is not explicitly assigned a value is undefined.

null:

null is a value that represents the intentional absence of any object value or no value at all.
It is often used to explicitly indicate that a variable or object property does not have a meaningful value.
It is commonly assigned to variables or properties by developers to signify emptiness or the absence of an object.
*/
