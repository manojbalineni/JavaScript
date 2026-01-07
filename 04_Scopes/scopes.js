console.log("Scopes in JS");
//Scope defines the accessbility of the functions and varibles based on thier location in the source code
//1. Global Scope => when a variable is defined outside the fuvtion or block it has a global scope
//we can access these variables from anywhere.

let name = "Manoj"; //global Scope
function greet() {
  console.log(name);
}
console.log(name);
greet();

//2. local
function sayHello() {
  let userName = "Swapana"; //local scope
  console.log(userName);
}
//console.log(userName);
// sayHello();

//3. Nested Scope
function outer() {
  let userName = "vissu";
  let age = 34;
  function inner() {
    let branch = "CSE";
    console.log(userName);
    console.log(age);
    console.log(branch);
  }
  inner();
  //console.log(branch);
}
outer();

//Block Scope => let , const => block scoped

if (true) {
  let a = 100;
  console.log(a);
}
//console.log(a);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
