"use strict";

const num = Number(prompt("Enter a number"));

for (let i = 0; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FuzzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
