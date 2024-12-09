// jQuery는
//JS의 라이브러리로 DOM조작, 이벤트 처리, 애니메이션, Ajax요청들을
//쉽게 구현할수있도록 설계

//JS코드의 간결성과 생산성을 높이기 위해 만들어짐

//$(CSS선택자).동작함수

//$() = HTML 요소를 선택하는 함수
//동작함수 = 선택된 요소에 대래 원하는 동작 수행

//원래 가져 오는 방식
// let div1 = document.getElementById("div1");
// console.log(div1);

console.log($("#div1")); //ce {0: div#div1, length: 1}
//ce = jQuery 객체가 내부적으로 사용하는 이름
//jQuery 객체를 생성하고 초기화하는 함수

//1. 순수 JS
function submitJS() {
  const div1 = document.getElementById("div");
  div1.innerText = "반갑습니다";
  div1.setAttribute("style", "border: 2px solid red");
}
