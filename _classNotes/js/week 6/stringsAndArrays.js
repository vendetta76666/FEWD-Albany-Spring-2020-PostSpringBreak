var names = ["jimmy", "jack", "walt", "jose", "marry", "joan", "Sarah"];

names[0];
names[1];
names[2];
names[3];

var pet = "reggie";

pet += " the dog";

console.log(pet);

names.push("monica");
console.log(names);

var names2 = [];
for (var i = 0; i < names.length; i++) {
  names2.push(names[i]);
  console.log(names2);
}
