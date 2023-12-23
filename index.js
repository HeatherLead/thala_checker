let thala = document.querySelector(".thala");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let notThala = document.querySelector(".notThala");
const sound = new Audio("./resources/song.mp3");
const moye = new Audio("./resources/moye.mp3");
thala.style.display = "none";
notThala.style.display = "none";
btn.onclick = check;
var value = 0;
function check() {
  var data = input.value;
  if (isNaN(data)) {
    if (data.length === 7) {
      thala.style.display = "block";
      notThala.style.display = "none";
      input.value = "";
      document.querySelector(".head").innerHTML = "Thala for a Reason";
      moye.pause();
      sound.play();
    } else {
      notThala.style.display = "block";
      thala.style.display = "none";
      input.value = "";
      document.querySelector(".head").innerHTML = " moye moye 🥲";
      sound.pause();
      moye.play();
    }
  } else {
    var tempD = data;
    let arr = [];
    for (let i = 0; i < tempD.toString().length; i++) {
      var temp = data;
      arr[i] = Math.floor(temp % 10);
      value = Math.floor(value + (temp % 10));
      data = data / 10;
    }
    if (value === 7) {
      thala.style.display = "block";
      notThala.style.display = "none";
      input.value = "";
      value = 0;
      var rArr = arr.reverse();
      rArr = rArr.join("+");
      document.querySelector(".head").innerHTML =
        rArr + " = 7 thala for a reason 🥳";
      moye.pause();
      sound.play();
    } else {
      notThala.style.display = "block";
      thala.style.display = "none";
      input.value = "";
      value = 0;
      document.querySelector(".head").innerHTML = " moye moye 🥲";
      sound.pause();
      moye.play();
    }
  }
}
