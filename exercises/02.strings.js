/////////////////////////
///// More Strings //////
/////////////////////////

/**
 * @description
 * Create a vairable called fullName. Set its vaule to your full name.
 */

<<<<<<< HEAD
var fullName = "Michael Bryan Jones"
=======
let fullName = "Ramon Ambrose Vazquez";
console.log(fullName);

>>>>>>> 3de47c3b034aefbd44d9ecc106f5167dca92b717
/**
 * @description
 *
 * create a substring from fullName that contains the value of your first name. Store the result in a variable
 */
<<<<<<< HEAD
var firstName = fullName.substr(0, 7)
console.log(firstName)
=======

let firstName = fullName.slice(0, 5);
console.log(firstName);

>>>>>>> 3de47c3b034aefbd44d9ecc106f5167dca92b717
/**
 * @description
 * access the last letter of fullName. store the result in a variable. Remember that data structure numbering is index based
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 */
var lastLetter = fullName.charAt(fullName.length - 1)
console.log(lastLetter)

let lastLetterOfFullName = fullName.charAt(fullName.length - 1);
console.log(lastLetterOfFullName);

/**
 * @description
 * create a substring from the last 5 characters
 */
<<<<<<< HEAD
var substringLastFive = fullName.substr(fullName.length - 5)
console.log(substringLastFive)
=======

let lastFive = fullName.split(fullName.charAt(fullName.lastIndexOf("a"))).pop();
console.log(lastFive);
>>>>>>> 3de47c3b034aefbd44d9ecc106f5167dca92b717
/**
 * @do
 * include this file in a new commit
 */
