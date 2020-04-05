// Objects

// "string".length;
// [1, 2, 4, [2,3,4, 'the cat in the hat']].slice(0, 1);


// Comma sparated Properties
const contacts = [
  {
    // key: value
    name: "Bob Smith",
    phone: "5551234567",
    address: {
      city: "Knoxville",
      state: "TN"
    },
    hobbies: ["hunting", "swimming"],
    walk: function() {
      return this.name + " walks";
    }
  },
  {
    // key: value
    name: "Barb Smith",
    phone: "5551234567",
    address: {
      city: "Knoxville",
      state: "TN"
    },
    hobbies: ["hunting", "swimming"],
    walk: function() {
      return this.name + " runs";
    }
  }
];


// CSS - Semi-colon separated properties
// body {
//     margin: 0;
//     padding: 20px;
//     border: 1px solid #444;
// }

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i].name);
  console.log(contacts[i].hobbies);
}

// console.log(person.name);
// console.log(person.phone);

// console.log(person.address.city);

// console.log(person.walk())
