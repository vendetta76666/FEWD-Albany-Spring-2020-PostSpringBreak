var section = document.getElementById("section");


// why is the paragraph displayed even though we defined it after the console.log()?
console.log(section);

var p = document.createElement("p");

p.innerText = "Hello Mari!:-)";

section.appendChild(p);
