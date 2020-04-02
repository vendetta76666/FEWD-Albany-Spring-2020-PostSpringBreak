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

var newArray = [ ]

for (i = 0; i < states.length; i++){
  var firstUpperLetter = states[i][0].toUpperCase() 
  var restOfEachState = states[i].slice(-(states[i].length - 1))
  var upperCaseState = firstUpperLetter + restOfEachState
  newArray.push(upperCaseState)
}
console.log(newArray)

// for (i = 0; i < states.length; i++) {
//    var firstUpperLetter = states[i][0].toUpperCase() 
//    states[i].length
//    states.splice(i[0],0,firstUpperLetter)
//    console.log(states)
// }
console.log(states)
