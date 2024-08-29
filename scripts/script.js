let $ = document;
let hourBox = $.querySelector(".hour");
let minuteBox = $.querySelector(".minute");
let secondBox = $.querySelector(".second");

function updateTime() {
  let nowTime = new Date();
  hourBox.textContent = addZero(nowTime.getHours());
  minuteBox.textContent = addZero(nowTime.getMinutes());
  secondBox.textContent = addZero(nowTime.getSeconds());
}

$.addEventListener("DOMContentLoaded", function () {
  setInterval(updateTime, 500);
});

function addZero(x) {
  if (Number(x) >= 10) {
    return x;
  }
  return `0${x}`;
}
