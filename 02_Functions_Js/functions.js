//Functions in JS
//Reusable code to perform specfic task
//input , perform action and retuens the output

// function multiply(a = 5, b = 10) {
//   return a * b;
// }
// console.log(multiply(100, undefined));

// //Default parameters

// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet();
// greet("Manoj");

//Types of Functions
//1. Named Function

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

//2. Anonymous Functions

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(2, 5));

//3. Function Expression

// const difference = function subtract(a, b) {
//   return a - b;
// };
// console.log(difference(109, 89));

//4. Arrow functions

// let findMultiplication = (a, b) => {
//   a = a * 10;
//   b = b * 10;
//   return a * b;
// };

// let findSquare = (a) => a * a;
// console.log(findSquare(5));

// console.log(findMultiplication(7, 8));

//5. IIFE - Immediately Invoked Function Expressions

// (function () {
//   console.log("This function runs immediately");
// })();

// (function () {
//   let a = 100;
//   console.log(a);
// })();

//6. Callback functions

// function num(n, sample) {
//   let a = 100;
//   console.log(a);

//   return sample(n);
// }

// const double = (n) => n * 2;

// console.log(num(5, double));

function sayHello(a, b, sample) {
  a = a * 10;
  b = b * 10;
  sample(a, b);
  console.log("This is hello from the sayHello function");
}

const fun = (a, b) => {
  a = a * 10;
  b = b * 10;
  console.log(a * b);
};

sayHello(5, 6, fun);

// Task
//1 . To check number is a palindrome or not.
//2.  Check whether the number is armstrog number or not.
//3.  Check whether a number is prime number or not
//4. find the count of digits in a number
//5. Sum of digits in a number.

//7. Constructor Functions => Mainly used to create an objects

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const student = new Student("Manoj", 22);
const student1 = new Student("Swapna", 24);
console.log(student1.age);
console.log(student.name);

//8. Recursive function => A function calling itself untill a given condition is satisified

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

//9. Higher Order Functions  => Functions that takes another function as an argument or return the function itself.

function processUser(name, callback) {
  callback(name);
}

function greet(name) {
  console.log("Hello " + name);
}

processUser("manoj", greet);

// The below is higher order function as we are returning a function from it.
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const ans = multiplier(2);
console.log(ans(4));
