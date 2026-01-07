console.log("Objects in JS");
// Onjects are used to stored key value pairs
//In objects we can store functions also;

//Creation of object using literal

const user = {
  firstName: "Manoj",
  lastName: " Babu",
  firstName: "Sai",
  state_name: "Telegana",
};
console.log(user);
console.log(user.state_name);
console.log(user["firstName"]);

//Creation of Object using new Object()
const obj = new Object();
obj.a = 100;
obj.b = 110;
obj.firstName = "Swapna";
console.log(obj);

const user01 = {
  firstName: "Manoj",
  lastName: " Babu",
  firstName: "Sai",
  state_name: "Telegana",
  address: {
    state: " telegana",
    pinCode: "356717",
  },
  greet(age) {
    console.log(this.firstName + this.lastName + " " + age);
  },
};

console.log(user01.address.pinCode);
user01.greet(24);
delete user01.firstName;
console.log(user01);
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
console.log(Object.entries(student)); //[["name", "branch"], ["Swapna", "CSE"]]

//Deep Copy
const sample = { a: 99, b: 100 };
console.log(sample);

const demo = sample;
console.log(demo);
sample.a = 199;
demo.b = 19999;
console.log(sample);
console.log(demo);

//Shallow Copy

const emp = {
  name: "Swapan",
  company: "TCS",
};
console.log(emp);

//Creating a copy by assign() method
const emp01 = Object.assign({}, emp);
console.log(emp01);

emp.company = "Delottie";
console.log(emp);
console.log(emp01);
emp01.company = "infosys";
console.log(emp);
console.log(emp01);
