let today = new Date();

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let am = "AM";

console.log(hours + ": " + minutes + ":" + seconds + "am");

function numberGame(num) {
  if (Math.round(num) > 20) {
    return "number is greater than 20";
  } else if (Math.round(num) > 10) {
    return "number is greater than ten";
  }
}

console.log(numberGame(20));
