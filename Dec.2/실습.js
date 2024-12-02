// for (let x = 13; x <= 100; x++) {
//   for (let y = 1; y <= 100; y++) {
//     console.log(x * y);
//   }
// }

// let i = prompt("13의 배수를 구해보기");
// for (num = 0; num <= i; num++) {
//   if (num % 13 == 0 && num % 2 == 1) {
//     console.log(num);
//   }
// }

// let sum2 = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     sum2 += i;
//     console.log(i);
//   }
// }
// console.log(sum2);

// let i = 2,
//   j = 1;
// while (i < 10) {
//   while (j < 10) {
//     // console.log(i, 'x', j, '=', i * j);
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
//   j = 1;
// }

// 내가 만든 실습 while문 1~20 중에서 홀수의 합을 구하는거
// let i = 0;

// while (i < 20) {
//   while (j < 20) {
//     console.log(`${i + j}`);
//     if (i === 20) {
//       break;
//     }
//   }
// }

// let sum = 0; // 홀수의 합을 저장할 변수
// let i = 1; //초기값 1부터 시작

// while (i <= 20) {
//   // i가 20 이하일때 반복
//   if (i % 2 == 1) {
//     // i가 홀수인지 확인
//     sum += i; //홀수면, 합에 더해주는것
//   }
//   i++;
// }
// console.log(`Sum>>>>>> ${sum}`);

// 10부터 1 까지 역순으로 숫자 출력하기.

// let a = 10;
// let m = 0;

// while (a <= 10) {
//   if (m <= 9) {
//     a = a - m;
//   }
//   m++;
// }
// console.log(a);
// 위 커맨드가 작동이 안되는 이유
// a = 10 m = 1
// a = 9 m = 2
// a = 7 m = 3
// a = 4 m = 4
// a = 0 m = 5
// a = -5 m = 6

let x = 10; //초기값 설정 (10부터 시작해야해서)

while (x >= 1) {
  //i가 1 이상일때 반복을 하는것
  console.log(x); //현재 숫자 출력
  x--; //x를 1 감소
}

// let g = 1;
// do {
//   console.log(`g>>>>> ${g}`);
//   g++;
// } while (g <= 5);

// let number;
// do {
//   number = parseInt(prompt("숫자 입력: "), 10);
// } while (number <= 10);
// console.log("입력한 숫자");

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(`i >>>> ${i}`);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(`i >>>> ${i}`);
// }

// const int = prompt("별의 갯수 입력");

// for (let i = 1; i <= int; i++) {
//   let stars = " ";

//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

const h = parseInt(prompt("높이를 입력"), 10);

for (let i = 1; i <= h; i++) {
  let line = "";
}

for (let j = 1; j <= h - i; j++) {
  line = line + "";
}

for (let k = 1; k <= i; k++) {
  line = line + "*";
}
console.log(line);
