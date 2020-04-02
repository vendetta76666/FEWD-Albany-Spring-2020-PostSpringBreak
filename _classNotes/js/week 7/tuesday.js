// variables

//  spell cake correctly, transpose w and a
// str
// wa
// berry

let cake = "strwaberry";
let b = cake.indexOf("b");
let w = cake.indexOf("w");

let transposed = cake
  .slice(w, b)
  .split("")
  .reverse()
  .join("");

let pre = cake
  .split("")
  .slice(0, w)
  .join("");

let post = cake.slice(b);

let newCake = pre + transposed + post;
console.log(newCake);

// Title casing
let index = cake[0].toUpperCase();

let slice = index + cake.slice(1);
console.log(slice);

// For Loop

// console.log(cake[0])
// console.log(cake[1])
// console.log(cake[2])
// console.log(cake[3])

for (var i = 0; i < newCake.length; i++) {
  console.log(newCake[i]);
}

// Strings / Concatination

let car = "dodge";
const pi = 10;

let name = "bob";
let age = 41;
let favMovie = "Momento";
let intruments = ["drums", "guitar"];

let sentence =
  "hello my name is " +
  name +
  " i am " +
  age +
  " years young.  " +
  " my fav movie is. " +
  favMovie +
  " i love dogs. i play " +
  intruments[1] +
  " and " +
  intruments[0];

console.log(sentence);
