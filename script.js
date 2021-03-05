"use strict";
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
let hourNum = 0;
let minutNum = 0;
let secondNum = 0;
function startTime() {
  secondNum++;
  if (secondNum < 9) {
    second.innerHTML = `0${secondNum}`;
  } else {
    second.innerHTML = secondNum;
  }
  if (secondNum >= 59) {
    minutNum++;
    if (minutNum < 9) {
      minute.innerHTML = `0${minutNum}`;
      secondNum = 00;
    } else {
      minute.innerHTML = minutNum;
      secondNum = 00;
    }
  }
  if (minutNum >= 59) {
    hourNum++;
    if (hourNum < 9) {
      hour.innerHTML = `0${hourNum}`;
      minutNum = 00;
    } else {
      hour.innerHTML = hourNum;
      minutNum = 00;
    }
  }
}
start.addEventListener("click", () => {
  setInterval(startTime, 1000);
});
