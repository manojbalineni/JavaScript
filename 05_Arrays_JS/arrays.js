console.log("learning of arrays in JS");
/* Arrays in JS */
/* Another type of value which is used to store 
list of values */
const arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(typeof arr);
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

console.log(multi.length);

multi.push("Learning JS");
console.log(multi);

multi.splice(0, 2); // index we want to remove , no of values we want to remove
console.log(multi);

//Arrays Creation

const empty = [];
console.log(empty);

const a = new Array();
console.log(a);

const b = new Array(5);
console.log(b);
console.log(a.length);
console.log(b.length);

console.log(Array.of(3));

console.log(Array.of("a", "b", "c", "d"));

let str = "hello"; // ['h','e','l']
console.log(Array.from(str));

console.log(Array.isArray({})); //Object
console.log(Array.isArray([])); //Array

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

//Iteration methods
//(x , i , arr )
[1, 2, 3, 4, 5].forEach((x, i) => {
  console.log(x);
  console.log(i);
});

for (let i = 0; i < d.length; i++) {
  console.log(d[i]);
  if (d[i] === 1) {
    break;
  }
}

//map filter and reduce

const num = [1, 2, 3, 5, 6];
const squares = num.map((x) => x * 2);
console.log(squares);

const filter = num.filter((x) => x % 2 === 0);
console.log(filter);

const sum = num.reduce((acc, a) => acc + a, 0);
console.log(sum);

//[1,2,3,4,5] => 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15

const ch = ["a", "b", "c"];
//"" + 'a' = "a" + "b" = "ab" + "c" = "abc" , "cba"
const val = ch.reduce((acc, x) => acc + x, "");
console.log(val);
const val2 = ch.reduceRight((acc, x) => acc + x, "");
console.log(val2);

console.log([1, 2, 1].some((n) => n > 2));
console.log([1, 2, 3].some((n) => n > 2));

console.log([1, 2, 3].every((n) => n > 2));
console.log([11, 12, 13].every((n) => n > 2));
