const HTML = document.querySelector("HTML");
const Btn = document.querySelector("button");
const H2 = document.querySelector("h2");

Btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  H2.innerHTML = color;
  HTML.style.backgroundColor = color;
});

// // 랜덤 색상을 생성하는 함수
// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256); // 0~255 사이의 랜덤 값
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`; // 10진 코드의 RGB 형식 반환
// }

// // 문서 객체 가져오기
// const body = document.body; // 전체 문서의 body
// const h2 = document.querySelector("h2"); // h2 태그
// const button = document.querySelector("button"); // 버튼

// // 버튼 클릭 이벤트 핸들러 등록
// button.addEventListener("click", () => {
//   const newColor = getRandomColor(); // 새 랜덤 색상 생성
//   body.style.backgroundColor = newColor; // 배경 색상 변경
//   h2.textContent = newColor; // h2 태그 내용 변경
// });
