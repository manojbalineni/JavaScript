console.log("Set Time out and Set Time interval in JS");

//In JS if we want to perform any time related functions  we use setTimeOut and setTimeInterval

//setTimeout

console.log("start");

setTimeout(() => {
  console.log("Hello Word");
}, 5000);

console.log("End");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//setInterval => after 2 sec

let count = 0;
const time = setInterval(() => {
  count++;
  console.log("Count : " + count);
  if (count === 5) {
    clearInterval(time);
  }
}, 2000);
