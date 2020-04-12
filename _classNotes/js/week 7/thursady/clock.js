function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let am = "AM";

  if (hours > 12) {
    hours = hours - 12;
    am = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let time = hours + ":" + minutes + ":" + seconds + am;
  // seconds ? seconds = "0"+ seconds : seconds

  // condition ? true : false

  let clock = document.getElementById("clock");

  clock.innerText = time;
  clock.innerContent = time;
  setTimeout(showTime, 1000);
}
showTime();

document.onload(showTime());
