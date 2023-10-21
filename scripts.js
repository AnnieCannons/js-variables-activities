/************************ Exercise 1 - Identify Variables ************************/

// Declare Variables Here



let userAge=23;
const daysOfTheWeek = "";
let total_sales = 1500
let total_expense =500
let total_profit =1000 





/************************ Exercise 2 - Declaring Variables ************************/

// Declare three variables named firstName, lastName, and age. Assign your own values to each variable. 
let firstName = "Lai"
let lastName = "LaVaughn"
let myAge = 26 

// Log the variables' values to the console.

console.log(firstName,lastName,myAge)

console.log("Hello my name is  "+ firstName +" "+ lastName +" and i am  " +myAge )
/************************ Exercise 3 - Swapping Variables  ************************/

// Create two variables, a and b, and assign them any values.

// Swap the values of a and b. You may use a third variable to hold a value so you don't overwrite it. Use reassignment—don't change the previous lines of code!

// Log the values of a and b before and after the swap.

let A = "mac"
let B = "book"
let temp = A

console.log(A)
console.log(B)

A = B
B = temp
console.log(B)
console.log(A)
/************************ Exercise 4 - Working with Constants ************************/

// Declare a constant variable named PI and set its value to 3.14159. 

const pi = 3.41159

// Then, attempt to reassign a new value to PI. 
pi=33
// Observe the error in the console and write a comment here explaining why you can't reassign a constant.
//   you cannot reassign a constant variable because, as the name suggests, a constant's value is intended to remain constant in side your code. this is done to prevent accidental or unintended changes to important values in your code.