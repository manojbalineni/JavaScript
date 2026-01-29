console.log("Call Bind Apply in JS");

// Call() method = Function Browing => To brrow function from one Object

let printFullName = function (place, number) {
  console.log(number);
  console.log(this.firstName + " " + this.lastName + " " + place);
};
let name01 = {
  firstName: "Manoj",
  lastName: "Babu",
};

let name02 = {
  firstName: "Swapana",
  lastName: "Siliguri",
};

// printFullName.call(name01, "Hyderabad", 7883);

// printFullName.call(name02, "Guntur", 9001);

//Apply()

let printFullName01 = function (place, number) {
  console.log(number);
  console.log(this.firstName + " " + this.lastName + " " + place);
};

printFullName01.apply(name01, ["Hyderabad", 7883]);

//Bind() => return function.

let fun = printFullName01.bind(name01, "Gunter", 123);
let nam = printFullName01.bind(name02, "Guntur", 9001);

let obj = {
  name: "TCS",
};

function sayHello() {
  return "Company : " + this.name;
}

console.log(sayHello());
console.log(sayHello.call(obj));
console.log(sayHello.bind(obj));

const age = 10;
let person = {
  name: "Sai",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

let person2 = { age: 34 };

console.log(person.getAge.bind(person2));

var status = "1";
setTimeout(() => {
  const status = "2";
  const data = {
    status: 3,
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

const animals = [
  { species: "Lion", name: "king" },
  { species: "Tiger", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("# " + i + " " + this.species + " : " + this.name);
  };

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array);

const ag = 100;
var person05 = {
  name: "Ram",
  ag: 20,
  getAgeArrow: () => {
    console.log(this.ag);
  },
  getAge: function () {
    console.log(this.ag);
  },
};

var person06 = { ag: 45 };

person05.getAgeArrow.call(person06);
person05.getAge.call(person06);
