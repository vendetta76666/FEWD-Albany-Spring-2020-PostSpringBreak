// functions
// functions always return a value

function singASong() {
  return "Stayin' Alive";
}
singASong();

function splitString(str) {
  console.log(str.split(" "));
  return str.split("");
}

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

add();

function sub(a, b) {
  return a - b;
}

// console.log(add(34, 5, 3))

// console.log(sub(100, 34));


// function printWord(arr) {
//   let pets = ["mice", "men", "dogs"];
//   let arr = [];
//   for (let i = 0; i < pets.length; i++) {
//     arr.push(pets[i]);
//   }
//   console.log(arr);
// }

// console.log(printWord());




//  objects 


const person = {
    fName: "Nancy",
    lName: "Smith",
    hobbies: ['singing', 'running'],
    fullName: (this.fName + this.lName),
    greeting: function () {
        return "hello my name is " + this.fName +  this.lName+ " i enjoy " + this.hobbies[0] + " and " + this.hobbies[1]
    }

}



console.log(person.fName)
console.log(person.lName)

console.log(person.greeting())
// console.log(person.fullName)