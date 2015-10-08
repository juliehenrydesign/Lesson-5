// VARIABLES: var : Declares a variable, optionally initializing it to a value.

var myName = "Julie ";
var hisName = "Noodles and ";
var theirName = "Step Kids";

console.log(myName + hisName + theirName);

// A string stores a series of characters like "Noodles and ".
// A string can be any text inside double or single quotes:

// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



// DEBUGGING is IMPORTANT it searches for errors in programming code.
// Use the console : mac (OPTION, COMMAND & J) to see breaks in code.

// Display an Alert : in .js file: (a .js file) - in html : alert()
// alert("Hello World!")

// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________


// DATA TYPES:
// Data type specifies the size and type of values that can be stored in an identifier.
// Two types :
// Primitive — which include Integer, Character, Boolean, and Floating Point.
// Non-primitive — which include Classes, Interfaces, and Arrays.

// Boolean (TRUE OR FALSE) is a data type.
// ex. 

// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________


// Arrays : 

// var array-name = [item1, item2, ...];       
// ex: var cars = ["Saab", "Volvo", "BMW"];

// ARRAY : a group of variables that share the same data type, and are referred to
// by a common name. Arrays of any type can be created and may have one or more dimensions.

// A specific element in an array is accessed by its index. 
// The array index ranges from 0 to n−1; therefore, 
// in an array of size 10, the first element is stored at index 0 and the last or the 10th element at index 9.

// Arrays hold collections of data, of any data type.

// This one is full of strings:
// ["Snoopy", "Charlie Brown", "Patty", "Violet"];

// They can hold multiple data types:
// [11, 15, 25, 48, 79, "elephant"];

// Arrays can also be stored in variables:
// var class_names = ["Julie", "Sophie", "Rob", "John"].

// Accessing arrays: The index of an item inside of an array corresponds to its position
// from the beginning of the array.

// Multi Dimensional Arrays : 
// to access items nested inside of a multi-dimensional array, use this syntax:
// declare your mult-dimensional array

var cars = [ ["Porsche", "Camero"], ["Camry", "Prius"] ];
// access the first array inside
// then the first item inside that array
console.log(cars[0][0]);
> "Porsche"
// access the first array inside
// then the first item inside that array
console.log(cars[1][0]);
> "Camry"


// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



// TESTING : 

"stringone" === "string two";
 false

// Using three equals signs instead of two also checks the object type
// • If you don't check type, these are both true:
// • (10-5) == 5;
// • (10-5) == "5";


// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



// LOGIC:
// Comparison and Logical operators are used to test for true or false.

// Comparison Operators: are used in logical statements to determine equality or difference between variables or values.
// Given that x = 5 : 
// ==	: equal to	x == 8	false;
// ===	: equal value and equal type	x === 5	true - x === "5"	false
// !=	: not equal	x != 8	true
// !==	: not equal value or not equal type	x !== "5"	truE - x !== 5	false
// >	: greater than	x > 8	false
// <	: less than	x < 8	true
// >=	: greater than or equal to	x >= 8	false
// <=	: less than or equal to	x <= 8	true


// Used in conditional statements to compare values...
// if (age < 18) text = "R rated is OK!";


// Logical Operators: 
// &&	:and	(x < 10 && y > 1) is true	
// ||	: or	(x == 5 || y == 5) is false	
// !	: not	!(x == y) is true

// Conditional (Ternary) Operators assign a value to a variable based on some condition.

// Syntax
// variablename = (condition) ? value1:value2 
// Example
// var voteable = (age < 18) ? "Too young":"Old enough";


if(25>10){
console.log("Yes, this testing indicates 25 > 10 is true");
}

if(25<10){
console.log("this doesn't register because 25 is not less than 10");
} else{
console.log("You will see this though, since 25 < 10 evaluates to false");
}

// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



// FUNCTIONS:
// function is a block of code designed to perform a particular task.
// It's executed when "something" invokes it (calls it).

// Example

var p1 = ("10")
var p2 = ("5")

function myFunction(p1, p2) {
    return p1 * p2;
}

myFunction(p1, p2);


// The function returns the product of p1 and p2



// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



// SEPARATORS: 
// parentheses ( ) : Used to define precedence in expressions, to enclose parameters in method definitions, and enclosing cast types.
// braces { } : Used to define a block of code and to hold the values of arrays.
// brackets [ ] : Used to declare array types.
// semicolon ; : Used to separate statements.
// comma , : Used to separate identifiers in a variable declaration and in the for statement.
// period . : Used to separate package names from classes and subclasses and to separate a variable or a method from a reference variable.












