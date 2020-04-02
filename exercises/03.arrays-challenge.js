/////////////////////////
///// More Arrays ///////
/////////////////////////

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @description
 * create and array with 5 names
 */
var fiveNames = [ "Sam", "Mike", "Oscar", "Babs", "Alex" ]

/**
 * @description
 * use a for loop to create a copy of the names array
 */
var newArray = [ ]
 for ( i = 0; i < fiveNames.length; i++ ) {
  newArray.push(fiveNames[i])
 }
console.log(newArray)

/**
 * @description
 * add a sixth name to the second index position of the names array.
 * store your resultes in a new array
 **/

fiveNames.splice(1, 0, "Tom")
console.log(fiveNames)

/**
 * @description
 * use a for loop to title case each state in the array below
 *  * ie: 'alabama' becomes 'Alabama', 'new hampshire' becomes 'New Hampshire'
 *
 * save your results to a new array
 */

var states = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new hampshire",
  "new jersey",
  "new mexico",
  "new york",
  "north carolina",
  "north dakota ",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming"
];

var newArray = [ ] //define new array to work with
var index
var slice
var firstUpperLetter
var restOfEachState
var upperCaseState

for (i = 0; i < states.length; i++){  //for loop
  if (states[i].indexOf(' ') != -1) { //this looks for index of to not return a value of -1 which indicates two words
    index = states[i].indexOf(' ') + 1 //find the index of ' ' and add one to select second word first letter
    slice = states[i].slice(index + 1) //slice starting from the first letter second word forward ingoring first character
    upper = states[i][index].toUpperCase() //uppercase character second word first letter
    firstUpperLetter = states[i][0].toUpperCase() //first word first letter to uppercase
    restOfEachState = states[i].slice(1,index)  //rest of the first word, minus the first character
    upperCaseState = firstUpperLetter + restOfEachState + upper + slice //concat all the items we have found
    newArray.push(upperCaseState) //push two word state to array
  } else { //much simpler for one word states
    firstUpperLetter = states[i][0].toUpperCase() //find first letter of one word state and make it uppercase
    restOfEachState = states[i].slice(-(states[i].length - 1)) //slice from the end of the word to just before the first letter
    upperCaseState = firstUpperLetter + restOfEachState //concat strings to make whole state with uppercase
    newArray.push(upperCaseState) //push single word state to array
  }
}
console.log(newArray)