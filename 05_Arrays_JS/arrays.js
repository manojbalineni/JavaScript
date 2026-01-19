console.log("learning of arrays in JS");
/* Arrays in JS */
/* Another type of value which is used to store list of values */

const arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(typeof arr); // Js considers this as an object

const sample = {
  firstName: "Manoj",
};
console.log(Array.isArray(arr)); // returns true for arrays
console.log(Array.isArray(sample));

function sayGreet() {
  console.log("Hello");
}
sayGreet();
console.log(typeof sayGreet);

console.log(arr[0]);

//Inside array we can keep anything even another array and also the object=> hetergenous
const multi = ["Manoj", 10, 20, [12, 13, 14], { name: "Manoj", age: 34 }];
console.log(multi[4]);
console.log(typeof multi);
console.log(Array.isArray(multi));

console.log(multi.length);

multi.push("Learning JS");
console.log(multi);

multi.splice(0, 2); // index we want to remove , no of values we want to remove
console.log(multi);

// //Arrays Creation

const empty = [];
console.log(empty);

const a = new Array();
const obj = new Object();
console.log(a);

const b = new Array(5);
console.log(b);
console.log(a.length);
console.log(b.length);

const a1 = Array.of(3, 45, 67); //[3,45,67]
console.log(a1);

console.log(Array.of(3)); //[3]

console.log(Array.of("a", "b", "c", "d"));

let str = "hello"; // ['h','e','l']
console.log(Array.from(str));

// {} => object
// [] => Array
console.log(Array.isArray({})); //Object false
console.log(Array.isArray([])); //Array true

console.log(arr);
console.log(arr[0]);

console.log(arr.at(0));

console.log(arr.at(-1));
console.log(arr.at(-5));

const d = [1, 2, 3];
console.log(d);

const e = d.with(1, 299);
console.log(d);
console.log(e);

d[0] = 123;
console.log(d);
d[0] = 1000;
console.log(d);

//Iteration methods
//(x , i , arr )
[10, 20, 30, 40, 50].forEach((elemet, index) => {
  console.log(elemet);
  console.log(index);
});

for (let i = 0; i < d.length; i++) {
  console.log(d[i]);
  if (d[i] === 1) {
    break;
  }
}

// //map filter and reduce

const num = [1, 2, 3, 5, 6];
const squares = num.map((x) => x * 2);
console.log(squares);

const filter = num.filter((x) => x % 2 === 0);
console.log(filter);

const sum = num.reduce((acc, a) => acc + a, 0);
console.log(sum);

//[1,2,3,4,5] => 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15

const ch = ["a", "b", "c"];
//"" + 'a' = "a" + "b" = "ab" + "c" = "abc"
const val = ch.reduce((acc, x) => acc + x, "");
console.log(val);

const val2 = ch.reduceRight((acc, x) => acc + x, "");
console.log(val2);

console.log([1, 2, 1].some((n) => n > 2));
console.log([1, 2, 3].some((n) => n > 2));

console.log([1, 2, 3].every((n) => n > 2));
console.log([11, 12, 13].every((n) => n > 2));

console.log([1, 2, 3, 4].find((n) => n % 2 == 0));

console.log([1, 2, 3, 5].findIndex((n) => n % 2 == 0));

console.log([1, 2, 3, 5, 6].findLast((n) => n % 2 == 0));

console.log([1, 2, 3, 5, 6].findLastIndex((n) => n % 2 == 0));

console.log(["a", "b", "c"].includes("a"));

console.log(["a", "b", "c"].includes("n"));

console.log(["a", "b", "c"].indexOf("a"));

console.log(["a", "b", "c", "a"].lastIndexOf("a"));

const manoj = [];
manoj.push(121);

console.log(manoj);

const fruits = [
  "apple",
  "banana",
  "cherry",
  "pine apple",
  "strawberry",
  "guavava",
];
//remove
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.splice(0, 3); //removing elements
console.log(fruits);

const names = ["manoj", "swapna", "bindu", "vissu"];
console.log(names);
console.log(names.sort());

const people = [
  { name: "Manoj", age: 25 },
  { name: "babu", age: 23 },
];

console.log(people);
console.log(people.sort((p, q) => p.age - q.age));

const dummy = [1, 2, 3, 5, 6, 7, 12];
console.log(dummy.reverse());
dummy.fill(100, 0, 4);
console.log(dummy);

console.log(dummy);
console.log(dummy.slice(0, 5));
console.log(dummy);

const arr1 = [1, 2, 4, 5];
const arr2 = [6, 7, 8, 9];
console.log(arr1.concat(arr2));

const nested = [1, 2, 3, 4, [5, 6, 7, 8]]; // [[]] => []

console.log(nested.flat());

const c = [1, 2, [3, 4, [5, 6]], 7, 8]; //1,2,3,4,Array(2),7,8
console.log(c.flat(2));

const numbers = [1, 2, 3, 4, 5];

// Copy elements from index 3 (value 4) to index 0.
numbers.copyWithin(0, 3);

console.log(numbers);
// Expected output: [4, 5, 3, 4, 5]

const laptops = ["dell", "hp", "acer", "asus", "lenovo"];

// Copy elements from index 2 (acer) to index 4 (not included)
// to the position starting at index 0.
laptops.copyWithin(0, 2, 4);

console.log(laptops);
// Expected output: ['acer', 'asus', 'acer', 'asus', 'lenovo']

const fruitsObject = [
  { s: "banana", price: 8 },
  { s: "apple", price: 10 },
  { s: "orange", price: 12 },
];

fruitsObject.sort((x, y) => fruitsObject.s.localeCompare(y.s));
console.log(fruitsObject);
