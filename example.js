var a;

a = 2;

console.log(a);

var a = 5;

console.log(a);

let b;

b = 7;

console.log(b);

b = 77;

console.log(b);

// function triangle(base, height) {
//   const area = (base * height) / 2;
//   return area;
// }

function food(a) {
  return a;
}

console.log(food("제육덮밥"));

let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(i, sum);
}
console.log(sum);
