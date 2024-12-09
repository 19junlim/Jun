// js event
//어떤 사건을 의미 한다
// ex.버튼을 클릭, 웹 로드, 키눌림
//이런것들이 모두다 컴퓨터 입장에서는 사건이다

//이벤트에 함수등록 방법이 두가지 있다
//1. HTML 상에서 onXXX 속성으로 등록
//2. JS에서 listener 사용해서 등록하는 방법

//1. onXXX 속성으로 등록
//함수 선언문
function lickH1() {
  alert("제목 클릭! 함수이용");
}

//2. addEventListener

//element.add.EventListener(event, function)

//event: 처리할 이벤트의 이름을 나타낸다 ex. click,keyup
//function: 이벤트 발생시 실행할 함수

//여러 개의 이벤트 리스너 등록 가능

const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");
const container = document.getElementById("container");

//1개의 요소에 여러게의 이벤트 리스너 등록**
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭했습니다");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "aqua";
});

btn1.addEventListener("mouseout", function () {
  btn1.style.backgroundColor = "black";
});

//함수 선언문은 함수 명이 필요
//함수 표현식 (익명함수를 써주는것) function() <- 괄호가 익명 함수

//화살표 함수**
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "Hi~!";
  container.append(div);
});

//함수명을 매개변수로 받아서 이벤트 실행.**
btn3.addEventListener("click", changeColor);

function changeColor() {
  const divs = document.querySelectorAll("#container div");
  console.log(divs);
  //해당 요소들 전부 CSS 변화를 적용 시키기 위해 for..of 반복 사용
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
}

//this사용법**
btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  console.log(this); //this뜻 자기자신 ==> btn4 //왜냐하면 btn4를 눌러야 선택이 됨으로
  console.log(this.parentNode); //this를 이용해서 부모 접근
  this.style.backgroundColor = "yellow";
}

//this 키워드
// 이벤트 발생한 DOM요소를 가르킴
//화살표 함수에서는 동작 방식이 다르게 작용될 수 있다

//*this 사용 주의*
//일반 함수: this는 이벤트를 발생시킨 DOM요소를 가르킴
//화살표 함수: this는 상위 스코프를 따름 (window, undefined)
//key Event
//이벤트 객체
//DOM 이벤트가 발생할깨 브라우저가 자동으로 생성하는 객체
//브라우저는 발생한 이벤트에 대한 다양한 정보를 담은 이벤트 객체 (event objeect)를 이벤트 리스너에 전달
//ex. mousedown 이벤트 발생 -> 이벤트 객체 (마우스 좌표,버튼 번호)) 정보를 가짐
//ex. keydown 이벤츠 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  //이벤트 겍체
  //이벤트에 다양한 정보를 포함
  console.log(event); // 이벤트 객체에 대한 정보 출력
});
//event를 e 로 많이 바꿔서 사용한다
input.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.code); //눌려진 키의 고유 코드
  console.log(e.key); //input에 입력된 값
  console.log(e.target); //이벤트가 발생한 대상 요소를 참조

  if (e.code === "ArrowUp") {
    console.log("🔺");
  } else if (e.code === "ArrowDown") {
    console.log("🔻");
  } else {
    console.log("-");
  }
});

//폼 이벤트
const todoform = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
//클래스면 . 아이디면 # 무조건 잘 붙여주자

//e = 매게변수
todoform.addEventListener("submit", (e) => {
  console.log("submit");
  //submit: 폼에대한 내용을 제출
  //제출하는 순간, 새로고침이 일어납니다
  e.preventDefault(); //폼 submit 이벤트가 새로고침디는걸 막음 = 폼 제출을 막음

  const todoInput = document.querySelector('input[name="todo"]');
  //   console.log(todoInput.value); // 입력된 값.

  const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

  if (newTodo !== "") {
    const newTodoLi = document.createElement("li"); // <li></li>
    newTodoLi.append(newTodo); // <li>input 입력 값</li>
    console.log(newTodoLi);

    todos.append(newTodoLi);
  }

  // input 창 초기화
  todoInput.value = "";
});

//change: input요소에 변경이 일어나고 다른 요소를 클릭해서 input이 포커스 아웃(Blur) 처리 되었을때 일어나는 이벤트

const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("change", function (e) {
  console.log("change");
  console.log(e.target.value);
});

//input: input에 값이 입력될 때마다 이벤트 발생

changeInput.addEventListener("input", function () {
  console.log("입력 발생");
  //   console.log(this.value); //여기까지하면 입력하는 값을 그대로 바로 콘솔창에 띄워준다
  const div = document.querySelector(".intro");
  div.textContent = this.value;
  //여기까지 하면 입력창 바로아래 입력한 값들이 나온다
});
