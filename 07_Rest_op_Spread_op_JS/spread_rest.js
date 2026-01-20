console.log("Spread and Rest Operator in JS");
// REST and SPREAD ES6 => (...)

// REST => multiple elements and place them in an array

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 4, 7));

function sample(...input) {
  console.log(Array.isArray(input));
  console.log(input);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = sum + input[i];
  }
  console.log(sum);
}

sample(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function greeting(message, ...names) {
  console.log(names);
  console.log(`${message} , ${names.join(" and ")}`);
}

greeting("Good Evening", "a", "b", "c", "d");

//Destructuring the array and object

const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(first);
console.log(second);
console.log(rest);

const { name, company, age, ...b } = {
  name: "manoj",
  company: "tcs",
  location: "Hyd",
  age: 23,
};

console.log(name);
console.log(age);

console.log(company);

console.log(Array.isArray(b));

// [1,2,4,5,6,7] => 1 ,2,4,5,6,7

// Spread Operator (...)

const n = [1, 2, 3, 4, 6];
const se = [n, 67, 78, 90];
const ne = [...n, 67, 45, 90];
console.log(ne);
console.log(se);

// (1,2,3,4,5,6) => [1 ,2,3,4,5,6]  Rest Operator
// [1,2,3,4,5,6] => 1 , 2, 3 ,4,5,6  Spread Operator

// [1,2,3,4] [9,0,7,8] = [1 ,2,3,4,9,0,7,6,8]

const a = [1, 2, 3, 4];
const a1 = [5, 6, 7, 8];
const res = [...a1, ...a];
console.log(res);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const response = { ...obj1, ...obj2 };
console.log(response);

const api = {
  userName: "Manoj",
  age01: 23,
  loc: "Hyd",
};

const { userName, age01, loc } = api;
console.log(userName);
console.log(age01);
console.log(loc);
