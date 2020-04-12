/////////////////////////
///// More Strings //////
/////////////////////////

/**
 * @description
 * Create a vairable called fullName. Set its vaule to your full name.
 */

var fullName = "Michael Bryan Jones"
/**
 * @description
 *
 * create a substring from fullName that contains the value of your first name. Store the result in a variable
 */
var firstName = fullName.substr(0, 7)
console.log(firstName)
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
var substringLastFive = fullName.substr(fullName.length - 5)
console.log(substringLastFive)

let lastFive = fullName.split(fullName.charAt(fullName.lastIndexOf("a"))).pop();
console.log(lastFive);
/**
 * @do
 * include this file in a new commit
 */
