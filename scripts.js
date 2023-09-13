/* Exercise 1 - Identify Variables */

// Declare Variables Here
let totalSales;
let totalExpenses;
let totalProfit;
let adSpent;
let employees;
let apps;
let upsell;
let bundels;
let abandanctCart;
let ageGroup;
let locations;
let name;
let status;
let spent;
let returns;
let costConversion;
let costClick;
let ctr;
let actions;

/* Exercise 2 - Declaring Variables */

// Declare three variables named firstName, lastName, and age. Assign your own values to each variable. 

let firstName = "Shan";
let lastName = "Wolff";
let age = "38";
// Log the variables' values to the console.

console.log(firstName)
console.log(lastName)
console.log(age)



/*Exercise 3 - Swapping Variables*/

// Create two variables, a and b, and assign them any values.
let a = 9;
let b = 17;
let temp;

// Swap the values of a and b. You may use a third variable to hold a value so you don't overwrite it. Use reassignment—don't change the previous lines of code!
temp = a;
a = b;
b = temp;
//[a, b] = [b, a];//

// Log the values of a and b before and after the swap.
console.log(a);
console.log(b);


/*Exercise 4 - Working with Constants*/

// Declare a constant variable named PI and set its value to 3.14159. 
const PI = 3.14159;

// Then, attempt to reassign a new value to PI. 
"it will not work"

// Observe the error in the console and write a comment here explaining why you can't reassign a constant.
"Constants are assigned a value when declared—they can't be reassigned new values, so the only way they get a value is when they're declared."