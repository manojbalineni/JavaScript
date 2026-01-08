console.log("Objects in JS");

//JS -> numbers, boolean, String, Charachter
// Onjects are used to stored key value pairs
//Key -> String
// Value -> Can be anything like number, string , another object, function

//In objects we can store functions also;

//Creation of object using literal
let firstName = "Manoj";
const user = {
  lastName: " Babu",
  firstName: firstName,
  state_name: "Telegana",
  age: 34,
  address: {
    state: "Telegana",
    street: "Gachibowli",
  },
  domain: ["CSE", "IT"],
};

console.log(user);

const demo = {
  name: "Manoj",
};

console.log(typeof user);

console.log(user);
console.log(user.state_name); // Accessing a property
console.log(user["firstName"]);
console.log(user.address.street);

//Creation of Object using new Object()
const sample = new Object();
sample.a = 100;
sample.b = 110;
sample.firstName = "Swapna";
console.log(sample);

const user01 = {
  firstName: "Manoj",
  lastName: " Babu",
  firstName: "Sai",
  state_name: "Telegana",
  address: {
    state: " telegana",
    pinCode: "356717",
  },
  greet(age, month) {
    console.log(`${this.firstName} age is ${age} and month is ${month}`);
  },
};

console.log(user01.firstName);

console.log(user01);
user01.greet(24, "Jan");

console.log(user01.address.pinCode);

console.log(sample);
delete sample.a;
delete sample.b;
console.log(sample);

delete user01.firstName;
console.log(user01);

console.log(sample);
sample.firstName = "Siliguri";
console.log(sample);

console.log("firstName" in sample);
console.log("lastName" in sample);

console.log(sample.hasOwnProperty("firstName"));
console.log(sample.hasOwnProperty("lastName"));

user01.lastName = "Challa";
console.log(user01);
console.log("address01" in user01);
console.log(user01.hasOwnProperty("address"));

const student = {
  name: "Swapna",
  branch: "CSE",
};

for (let key in student) {
  console.log(key, student[key]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
//[["name", "Swapna"], ["Branch", "CSE"]]

// //Deep Copy
const sample01 = { a: 99, b: 100 };
console.log(sample01);

const demo01 = sample01;
console.log(demo01);

sample01.a = 199;
console.log(sample01);
console.log(demo01);

sample01.b = 2000;
console.log(sample01);
console.log(demo01);

// //Shallow Copy

const emp = {
  name: "Swapan",
  company: "TCS",
};
console.log(emp);

// //Creating a copy by assign() method results in shalllow copy
const emp01 = Object.assign({}, emp);
console.log(emp01);

emp.company = "Delottie";
console.log(emp);
console.log(emp01);
emp01.company = "infosys";
console.log(emp);
console.log(emp01);
