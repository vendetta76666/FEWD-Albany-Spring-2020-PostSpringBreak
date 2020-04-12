///////////////////////////
///////// OBJECTS /////////
///////////////////////////

/**
 * the variable str is a string object
 */

var str = "hello world";

/**
 * objects have properties or functions assigned to them.
 * you can access an object's properties or functions with the dot '.'
 */

//  console.log(str.length)
//  console.log(str.toUpperCase())
//  console.log(str.split().join("-"))

const person = [
  {
    /**
     * Object properties are made up of key-value pairs
     * Object properties can be a string, array, another object, or function 
     *
     * console.log(person[0].name) prints "Dennis Rodman"
     *
     */
    name: "Dennis Rodman",

    /**
     * Object properties are seperated by commas
     */
    profession: "Basketball player",
    address: {
      city: "Chicago",
      state: "IL",
    },
    phone: {
      home: "5551235555",
      cell: ["5559995555", "5558885555"],
    },
    knownFor: ["rebounds", "free throws", "hair styles"],

    /**new objects are sperated by commas */
  },
  {
    name: "Charles Barkely",
    profession: "Basketball player",
    address: {
      city: "Houston",
      state: "TX",
    },
    phone: {
      home: "5551235566",
      cell: ["5559995534", "5558885534"],
    },
    knownFor: ["rebounds", "free throws", "trash talk"],
  },
  {
    name: "Darrel Strawberry",
    profession: "Baseball player",
    address: {
      city: "Queens",
      state: "NY",
    },
    phone: {
      home: "5551235589",
      cell: ["5559995590", "5558885512"],
    },
    knownFor: ["homeruns", "base steals", "left field"],
  },
];

/**
 * Itterating over an array or objects works the same as iterating over an array or string.
 *
 */

for (var i = 0; i < person.length; i++) {
  console.log(person[i].name);
  console.log(person[i].profession);
}

console.log(person[0].name);
console.log(person[0].profession);
console.log(person[0].address.city);
console.log(person[0].address.state);

console.log(person);
