/**
 * JavaScript gives us a function called console.log() to print our results to the console.
 * Using the console.log() function, write the following excercises to the console.
 * ie: console.log("hello world") will print "hello world" to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

 */

// //////////////////////////////////
// /////////// Arrays ///////////////
// //////////////////////////////////

/**
 * Create an array named fullNameArray. Using fullName, populate fullNameArray with the values of your first middle and last names.
 * @returns {Array} array
 */

// var fullNameArray = [firstName, middleName, lastName];
// var fullNameArray = [ "Michael", "Bryan", "Jones" ];

function createFullNameArray(firstN, middleN, lastN) {
  var fullNameArray = [ ] 
  fullNameArray.push(firstN, middleN, lastN)
  return fullNameArray;
}

var fullNameArray = createFullNameArray("Michael", "Bryan", "Jones")
console.log(fullNameArray)
/**
 * Access the values of your first, middle and last names from fullNameArray. Store the results in a greeting.
 * ie: var greeting = "hello, my name is @string @string @string ";
 * @param {*} fName
 * @param {*} mName
 * @param {*} lName
 * @returns {String} string
 */

function createGreeting(fName, mName, lName) {
  var fullNameArray = [ ]
  fullNameArray.push(fName, mName, lName)
  var greeting = 'Hello my name is ' + fullNameArray[0] + ' ' + fullNameArray[1] + ' ' + fullNameArray[2]
  return greeting;
}
var greeting = createGreeting("Michael", "Bryan", "Jones")
console.log(greeting)


/**
 * @description
 *  * Create an array of your five top favorite takeout foods.
 *
 * @returns {Array} array
 */

function topFiveTakeOutFoods(first, second, third, fourth, fifth) {
  var takeoutFoods =  []
  takeoutFoods.push(first, second, third, fourth, fifth)
  return takeoutFoods;
}

var foods = topFiveTakeOutFoods("Pizza", "Chicken Wings", "Salads", "Banana Cream Pie", "Rice Pudding")
console.log(foods)

/**
 * @description
 *  * Remove the first item from the takeout array. Store the result in a variable.
 *
 * @return {String} string
 */

function removeFirstItem(foodArray) {
  foodArray.pop()
  return foodArray
}
var removedItem = removeFirstItem(foods)
console.log(removedItem)
/**
 * @description
 * Add a new item to the beginning of the takeout array.
 *
 * @returns {String} string
 */

function addNewItemToBeginning(foodArray, addedItem) {
  foodArray.push(addedItem)
  return foodArray
}
var addedItem = addNewItemToBeginning(foods, "Strawberries")
console.log(addedItem)

/**
 * @description
 * Remove an item from then end of the takeout array. Store the result in a variable.
 *
 * @returns {String} string
 */

function removeItemFromEnd(foodArray) {
  foodArray.pop()
  return foodArray
}

var itemRemoved = removeItemFromEnd(foods)
console.log(itemRemoved)

/**
 * @description
 * Add a new item to the end of the takeout array.
 *
 * @returns {String} string
 */

function addItemToEnd(foodArray, itemAdded) {
  foodArray.push(itemAdded)
  return foodArray
}
var itemAdded = addItemToEnd(foods, "Octopus")
console.log(itemAdded)

/**
 * @description
 * Return a copy of index items 2 through 4. Store the results in a variable.
 *
 * @returns {Array} array
 */

function createSubArray() {}

/**
 * @description
 * Create and empty array. Copy the last three items from the takeout array into the new array.
 *
 * @returns {Array} array
 */
function createNewArray(theArray) {
  var arrayLength = theArray.length
  var lastThree = [ ]
  lastThree.push(theArray[arrayLength - 3])
  lastThree.push(theArray[arrayLength - 2])
  lastThree.push(theArray[arrayLength - 1])
  return lastThree
}

var lastThree = createNewArray(foods)
console.log(lastThree)

/**
 * @description
 * Create a comma-delimited String using the takout array.
 *
 * @returns {String} string
 */
function createCommaDelimitedString(foodArray) {
  var returnArray = foodArray.toString(",")
  return returnArray
}

var stringFood = createCommaDelimitedString(foods)
console.log(stringFood)

/**
 * @do
 * include this file in a new commit and push
 */
