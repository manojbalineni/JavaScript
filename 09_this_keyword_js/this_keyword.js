console.log("This Keyword in JS");
//this -> used to refer the objects
// Arrays , functions, Objects => JS Object
console.log(this);
//this -> window object
this.a = 10;
console.log(window.a); // this.a // a

function greet() {
  console.log(this.b);
}

greet();

let name = "TCS";

const user = {
  name: "Manoj",
  age: 23,
  a: 45,
  firstName: " Ram",
  childObject: {
    firstName: "Sai",
    getDetails() {
      let firstName = "Ramu";
      const sayHello = () => console.log(this.firstName);
      sayHello();
    },
  },
};

user.childObject.getDetails();

const user01 = {
  firstName: "Ravi",
  getName: () => {
    const firstName = "Sommu";
    return this.firstName;
  },
};

console.log(user01.getName());

function makeuser() {
  let a = {
    name: "John",
    ref: this,
  };
  return a;
}
let user03 = makeuser();
console.log(user03.ref.name);

function makeuser01() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user04 = makeuser01();
console.log(user04.ref().name);

const user05 = {
  name: "Manoj",
  logMessage() {
    console.log(this.name);
  },
};

user05.logMessage();

setTimeout(function () {
  user05.logMessage();
}, 1000);

//Global => Window
//Inside a Normal Function => points to the parent object
//Arrow Function => Parent Normal Function
