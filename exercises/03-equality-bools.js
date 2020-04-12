///////////////////////////////////////////////
////// Equality Operations and Booleans ///////
///////////////////////////////////////////////

// Create a function for each of the following statements
//  for equality

/**
 * x is greater than y
 * @returns {Boolean}
 *
    ie: 
    const xGreaterThanY = function (x, y) {
      if (x > y) {  // if this is a true condition
        return x;   // return x
      } else {
        return "x is not greater than y";
      }
    };
};
*/

function xGreaterThanY() {
  return x > y
}

/**
 * x divided by y is less than or equal to y divided by x
 * @returns {Boolean}
 */
function xDivY(){
  var x = 1
  var y = 2
  return x/y >= y/x
}

console.log(xDivY())

/**
 * not zero is not equal to zero divided by zero
 * @returns {Boolean}
 */

 function zeroDiv (){
   return !0 !== 0/0
 }
 console.log(zeroDiv())

/**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * Check if x minus y is equal to the length of "length of fullName"
 * @returns {Boolean}
 */
var fullName = "Michael Bryan Jones"
function check () {
  var x = 1
  var y = 2
  return x-y == fullName.length
}

console.log(check())
/**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * chceck if x is less than or equal than fullName.length
 * @returns {Boolean}
 */
function anotherCompare() {
  var x = 3
  return x <= fullName.length
}

console.log(anotherCompare())
 /**
 * thirteen plus six is not equal to twentythree minus 5
 * @returns {Boolean}
 */
function anotherOne () {
  return 13 + 6 !== 23 - 5
}

console.log(anotherOne())

/**
 * seventyfive or seventyfive and twentyfour times three
 * @returns {Number}
 */
function compareAgain () {
  return Boolean(772 && 773)
}
console.log(compareAgain())

/**
 * "my first name" is not equal to "My first name"
 * @returns {Boolean}
 */
function anotherFunction() {
  return "my first name" === "My first name"
}
console.log(anotherFunction())

/**
 * four plus three and six times eight
 * @returns {Number}
 */
function yetAgain () {
  return 4 + 3 && 6 * 8 
}
console.log(yetAgain())

/**
 * "four" is equal to 4
 * @returns {Boolean}
 */
function fourEq (){
  return "four" === 4
}
console.log(fourEq())