//jQuery 이벤트 메소드 기본 구조

// $(선택자).이벤트메소드(핸들러)

//선택자: 이벤트 바인딩할 대상 요소 선택
//이벤트 메소드: 실행될 이벤트 종류를 지정
//핸들러: 이벤트가 발생했을떄 실행될 함수

//이벤트를 지정된 선택자에 직접 바인딩
//간편하고 직관적

//단점
//동적 요소에 대한 이벤트 비안딩이 불가능
//ex)페이지 로드 후, 동적으로 버튼이 추가 되었을때, 추가된 버튼에는 이벤트가 안먹힘

//.on() 메소드 기본 구조

//$(선택자).on(이벤트, 자식선택자, 핸들러)

//이벤트: 이벤트 종류
//자식선택자: 이벤트를 위임할 자식 요소
//핸들러: 이벤트가 발생했을떄 실행될 함수

//하나의 메소드로 모든 이벤트를 처리할수있다
//더 강력한 이벤트 바인딩 메소드
//동적으로 생성된 요소에도 이벤트 바인딩을 할수있음

//1.Load Event
//in js
document.addEventListener("DOMContentLoaded", function () {
  console.log("문서의 dom 트리가 완성되면 실행되는 이벤트 (js)");
});

// in jQuery
$(document).ready(function () {
  console.log("ready - 문서 dom 트리가 완성되면 실행되는 이벤트 (jQuery)");
});

//.ready() 단축 속성
$(function () {
  console.log("안녕?");
});

// -$(document).ready()
// - jQuery에서 제공하는 문서 준비 이벤트
// - 브라우저가 DOM 트리를 모두 생성한 후에 실행
// - 즉, DOM이 준비되었을 떄 JS 코드가 실행되도록 보장

// 2. Mouse Event
// in jquery
// 'p-msg' 라는 클라스를 가진 요소를 선택하고, 'click' 이벤트를 사용.
// color => red로 바꿔보세요
//기본 버전
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

// num 클래스를 가진 요소를 선택하고 'click' 이벤트를 사용
// color => blue로 바꿈
//기본버전 + this
$(".num").click(function () {
  $(this).css("color", "blue");
});

//참고 //this 키워드 - jQuery 메소드를 사용하려면 $(this)로 변환 해야함

// .on 버전
$(".num").on("click", function () {
  $(this).css("color", "blue");
});

// click in js
// num 클래스를 가진 요소를 선택하고, click 이벤트를 사용
// color => 자유롭게 색상 변경
// 각각의 요소에 접근하기 위해선 '반복문' 사용해야함
const nums = document.querySelectorAll(".num");
console.log("num>>>>>>", nums);

for (let num of nums) {
  console.log(num);
  num.addEventListener("click", function (e) {
    // this 사용법
    // console.log("this>>>", this);
    // this.style.color = "blue";

    // e 객체 사용 방법
    console.log("e.target>>>>>", e.target);
    e.target.style.color = "pink";
  });
}

// mouseover(): 요소에 마우스를 올렸을떄
//-기본 버전
$(".numbers").mouseover(function () {
  $(this).css("background-color", "skyblue");
  $(this).append("<div>handler for basic</div>");
});

// .on 버전
$(".numbers").on("mouseover", function () {
  $(this).css("background-color", "skyblue");
  $(this).append("<div>handler for .on()</div>");
});

// hover(): 마우스 올리고 떘을때
// mouseover + mouseout 합친 형태
$(".div-hover").hover(function () {
  $(this).toggleClass("hover");
});
// hover는 .on 메서드가 안됨
// hover는 DOM 이벤트가 아니다

//scroll()
// 윈도우 창을 스크롤 할떄
// - 기본 버전
$(window).scroll(function () {
  console.log("scrolling!!!");
});

// - .on 버전
$(window).on("scroll", function () {
  console.log("on scrolling!!");
});

///////////////////////////////////////////////

// 3. Key Event
$(".input-key").on("keydown", function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code);
  console.log(e.key);

  if (e.code === "ArrowUp") {
    console.log("위");
  } else if (e.code === "ArrowDown") {
    console.log("아래");
  } else {
    console.log("나머지 키");
  }
});

// 4. Form Event
$("#todo-form").on("submit", function (e) {
  e.preventDefault();

  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장 //value 주는 메소드 val()
  const element = $("[name='todo']");
  const todo = element.val(); //나눠서 쓰는법
  //   const todo = $("[name='todo']").val // 한번에 쓰는법

  // 2. todos 클래스를 갖는 요소를 선택
  //    -> 새로 새성한 li요소에 todo 변수의 값을 텍스트로 갖게 한 후,
  //      todos클래스 요소에 자식 요소로 추가 // 자식요소주는 메소드 append()
  $(".todos").append(`<li>${todo}</li>`);

  // 3. name 속성값이 todo인 요소의 value 초기화 // value 초기화 메소드 val()
  element.val("");
});

//e.preventDefault() 또 다르 예제
$("a#inactive").on("click", function (e) {
  e.preventDefault(); // a태그의 기본 동작을 막음
  // a 태그의 클릭 이벤트에 대해서 기본 동작은
  // href에 연결되어 있는 링크들로의 이동
  $("#text").append("이 링크는 동작하지 않음!");
});

// this
// 실행된 함수가 속해 있던 객체를 참조.
// "뭔가"를 클릭할 때 불러오는 함수 (=콜백함수)에서 this는 그 "뭔가"를 의미.
const btns = document.querySelectorAll(".btn");
const spans = document.querySelectorAll(".span");
console.log(btns); // NodeList(5) [button.btn.btn1, button.btn.btn2, button.btn.btn3, button.btn.btn4, button.btn.btn5]

function setBgColor() {
  this.style.backgroundColor = "royalblue";
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  // 1. 익명 함수로 이벤트 핸들러 정의 (this 사용)
  btn.addEventListener("click", function () {
    console.log(this); // 클릭된 버튼을 말함.
    this.style.backgroundColor = "royalblue";
  });

  // 2. 함수 참조를 통한 이벤트 핸들러 정의
  // - setBgColor 함수가 호출 될 때, 이벤트가 발생한 DOM 요소가 'this'
  btn.addEventListener("click", setBgColor);

  // 3. 익명 함수에서 또 다른 함수 호출.
  btn.addEventListener("click", function () {
    setBgColor2(this, "purple");
  });
}

for (let span of spans) {
  // 1.
  span.addEventListener("click", function () {
    this.style.backgroundColor = "lightgreen";
  });

  // 2.
  span.addEventListener("click", setBgColor);

  // 3.
  span.addEventListener("click", function () {
    setBgColor2(this, "green");
  });
}
