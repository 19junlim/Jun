const span1 = document.getElementById("span1");
span1.style.color = "red";
span1.innerHTML = "<b>맛없다 ㅡㅡ;;</b>";

console.log("-------------------");

// const today = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
// console.log(today);

const now = new Date();
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

if (now.getDay() === 0) {
  console.log("주말");
} else if (now.getDay() === 6) {
  console.log("주말");
} else console.log("평일");

switch (now.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일");
    break;
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("없음");
}
