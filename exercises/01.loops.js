/**
 * for each item in the contacts array
 * print each item including the nested objects
 * Hint: you may need a second loop to print both phone numbers
 *
 */

const contacts = [
  {
    firstName: "daenerys",
    lastName: "targaryen",
    img:
      "https://theartofgrowthandofeverything.files.wordpress.com/2018/06/daenerys-targaryen6.jpg?w=540",
    phone: {
      work: "5552002000",
      cell: "5552005000",
    },
    knownFor: "dragons",
  },
  {
    firstName: "jon",
    lastName: "stark",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png",
    phone: {
      work: "5557702000",
      cell: "5557705000",
    },
    knownFor: "the nights watch",
  },
  {
    firstName: "aria",
    lastName: "stark",
    img:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/scale-to-width-down/335?cb=20190520174300",
    phone: {
      work: "5557792009",
      cell: "5557795009",
    },
    knownFor: "hero of the seven kingdoms",
  },
];
