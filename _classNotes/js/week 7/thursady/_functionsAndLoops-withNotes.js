//////////////////////////
//////// Functions ///////
//////////////////////////

/**
 * Scope:
 * Variables in the global scope are accessable by all functions
 * Variables in the local scope are only accessable within the functions that they are defined
 */

let c = 10; // - Global Scope

// Functions can be declared without arguments (placeholders within the ()'s )
function add() {
  let a = 5; // Local scope

  // All functions return a value. The return value of this function is 6.
  return 1 + a;
}

function subtract() {
  return 10;
}

/**
 * Calling Functions:
 * Calling / Executing / Running functions allows us to perfom other work with there return values
 */

add();
subtract();

console.log(add() * subtract());

/**
 * Function can be declared with Arguments / Parameters.
 * Arguments / Parameters give us greater flexability when calling them.
 * The funciton performs the specified code on the arguments and returns a value. *
 */

function add2(b, a) {
  let addTwoNumbers = a + b;
  return addTwoNumbers;
}

function subtract2(a, b) {
  return a - b;
}

/**
 * Calling function with Arguments / Parameters
 * We provide Arguments to functions when executing them
 */

add2(2, 3);
add2(3, 9);
add2(4, 4);
subtract2(93, 43);
subtract2(20, 39);
subtract2(202, 333);

console.log(add2(8, 15));
console.log(subtract2(19, 41));

/**
 * Functions can be passed as an argument into another function
 */
console.log(add2(100, subtract2(9, add2(10, 4))));

//////////////////////////
/////////// LOOPS/////////
//////////////////////////

var names = ["mark", "mike", "gina", "sally"];

/**
 * We can iterate over items in an array manually by  printing the array name and accessing the items by their index.
 * ie:
 * names[0];
 * names[1];
 * names[2];
 * names[3];
 *
 * This is very tedious and not a good practice.
 * A better solution is to use a for loop
 *
 */

for (var i = 0; i < names.length; i++) {
  // a for loop is composed of three parts
  // a counter variable
  // the duration that determines how long the loop should run
  // a means of incrementing the variable

  console.log(names[i]);
  // on the first iteration i = 0: console.log(names[0]) /// prints 'mark' to the console then adds 1 to i
  // on the seciond iteration i = 1: console.log(names[1]) /// prints 'mike' to the console then adds 1 to i
  // on the third iteration i = 2: console.log(names[2]) /// prints 'gina' to the console then adds 1 to i
  // on the fourth iteration i = 3: console.log(names[3]) /// prints 'sally' to the console then adds 1 to i

  // The loop ends when the length of the array is reached
}
