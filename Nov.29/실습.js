// function multifly(num1, num2) {
//   return `${num1 * num2}`;
// }

// console.log(multifly(3, 7));
// console.log(multifly(2, 2));

// function square(num1) {
//   return `${num1 ** 2}`;
// }

// console.log(square(4));
// console.log(square(11));
// console.log(square(5));

function age() {
  let age = prompt("Please type your age");

  if (age >= 20) {
    return "성인";
  } else if (age >= 17) {
    return "고등학생";
  } else if (age >= 14) {
    return "중학생";
  } else if (age >= 8) {
    return "초등학생";
  } else {
    return "유아";
  }
}

console.log(age());
