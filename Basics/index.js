console.log("Hello World");

//varibale declaration
//let, const , var => used to varibale declartion
let a = 100; // Used for variables that can change thier value
// const used to constant values

let num = 100;
console.log(num);

let str = "Manoj";
console.log(str);

str = "Babu";

//typeof => Used to find the type of the variable
console.log(str);

console.log(typeof str);
console.log(typeof num);

const val = 100;
console.log(val);

let val3;

// const val2; //const variables initialized

//Strings

const name = "Manoj";
console.log(name);
const text = "Some Random Text";
console.log(text);
console.log(typeof text);
let s = "Hello " + "World";
let s1 = "Hello";
let s2 = "Vissu";
console.log(s1 + " " + s2);

console.log(s);

console.log("hello" + 3);
console.log(2 + "hello");
console.log(2 + 2 + "hello");
console.log("hello" + 2 + 2);

//backticks => Template Strings

const greetings = `Good Evening`;
console.log(typeof greetings);
console.log(greetings + " Manoj");

// I am 4 years old

let age = 4;
const msg = `I am ${age} years old.`;
console.log(msg);

//Number , Strings

//Boolean  => two values true / fasle
let b = true;
console.log(typeof b);

// === ==

let c = "2";
let d = 2;
console.log(c == d); // => Convert the value into same type and compare
console.log(c === d); // Checks the
// >= , <= , > , <

// Truthy and falsy values
//Falsy values
//1. false
//2. 0
// 3. ''
//4. NaN
//5. Undefined
//6. null

if (undefined) {
  console.log("In if block");
} else {
  console.log("In else block");
}

//Ternanry Operator

// (condition) ? "" : ""

let even = 100 % 2 == 0 ? "Even Number" : "Odd Number";
console.log(even);
age = 21;
let isEligible = age > 18 ? true : false;
console.log(isEligible);

const p = "Hello";

//Gaurd Operator(&&)
//value1 && value2 => both values should be true
//value1 && value2 => Short Circuit evaluation

//Default Operator(||)
//value1 || value2   => Atleast one should be true

if (age > 100 || a < 20 || a > 100) {
}
