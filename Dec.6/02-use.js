// val() - value
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jQuery
  const value = $("input").val();
  alert(value);
}

function setValue() {
  // js
  // document.querySelector('input').value = '하이!';

  // jQuery
  $("input").val("하이하이!");
}

// css()
function changeCssJS() {
  const span = document.querySelector("span");
  span.style.fontSize = "20px"; // 인라인 방식
  span.style.color = "red";
}

function changeCssJquery() {
  // case1
  // $('span').css('font-size', '40px'); // css 스타일
  // $('span').css('color', 'blue');

  // case2 - css 여러 속성 한번에 적용
  $("span").css({
    fontSize: "40px", // 모든 span에 대해 폰트 크기 변경
    color: "blue", // 모든 span에 대해 폰트 색상 변경
  });
}

function getCssJquery() {
  // js
  // console.log(document.querySelector('span').style.color);
  // style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음.

  // jQuery
  console.log($("span").css("color"));
  // .css() 메서드는 브라우저에게 계산된 스타일 값을 반환.
  // 계산된 스타일을 반환하므로, 인라인 스타일뿐만 아니라 모든 적용된 스타일 정보를 가져 올 수 있음.
  // 반환 값은 대부분 RGB형식.
}

// Attr()
function changeAttrJS() {
  // a 태그를 선택하고, href 속성 값을 naver주소로 바꾸기
  const a = document.querySelector("a");
  //   a.setAttribute("href", "hrrps://www.naver.com"); //HTML속성 값을 설정하는 방법
  a.href = "https://www.naver.com"; // DOM 요소의 속성에 직접 접근 하는 방법
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net/");
}

//text()
function changeTextJS() {
  //p-text 클래스를 갖는 요소를 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p = document.querySelector(".p-text");
  p.innerText = "js로 텍스트 변경함";
}

function changeTextJquery() {
  $(".p-text").text("jquery로 텍스트 변경함.");
}

//html()
function changeHtmlJS() {
  //p-html 클래스를 같는 요소 선택하고, <h3>javascript</h3>로 변경
  const h = document.querySelector(".h-html");
  h.innerHTML = "<h3>javascript</h3>";
}

function changeHtmlJquery() {
  $(".p-html").html("<h3>jquery</h3>");
}

//요소 추가하기
//append()
function appendJS() {
  //colors 클래스 같는 요소 선택
  const colors = document.querySelector(".colors");
  //li 태그 요소 생성후 //<li></li>
  const li = document.createElement("li");
  //li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가 //<li>마지막 자식으로 추가된 js</li>
  li.innerText = "마지막 자식으로 추가된 js";
  //colors 클래스응 갖는 요소에 '맨 마지막 자식'으로 li 요소 추가
  colors.append(li);
}

function appendJquery() {
  $(".colors").append("<li>마지막 자식으로 추가된 jQuery</li>");
}

//prepend()
function prependJS() {
  const colors2 = document.querySelector(".colors");
  const li = document.createElement("li");
  li.innerText = "첫 자식으로 추가된 js";
  colors2.prepend(li);
}

function prependJquery() {
  $(".colors").prepend("<li>첫 자식으로 추가된 jquery</li>");
}

//before
function beforeJS() {
  //green 클래스 갖는 요소 선택
  const green = document.querySelector(".green");
  //li태그 요소 생성후
  const li = document.createElement("li"); //li태그 만드는법
  //li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = "green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)";
  //li 요소의 color 색상을 blue로 변경
  li.style.color = "blue";
  li.setAttribute("style", "color:blue");
  //green 클래스를 갖는 요소의 '바로 이전 형제 요소'로 li 요소 추가
  green.before(li);
}

function beforeJquery() {
  $(".green").before(
    "<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>"
  );
}

function afterJS() {
  const green = document.querySelector(".green");
  const li = document.createElement("li");
  li.innerText = "다음 형제요소로 추가(js)";
  green.after(li);
}

function afterJquery() {
  $(".green").after("<li>다음 형제요소로 추가(jquery)");
}

//요소 삭제하기
//remove()
function removeJS() {
  //li2 아이디 같는 요소 선택하여 그 요소 삭제
  const li2 = document.querySelector("#li2");
  li2.remove();
}

function removeJquery() {
  $("#li2").remove();
}

//empty()
function emptyJS() {
  //js에는 empty 메서드가 없다
  //1. ul 태그이자 num 클래스를 갖는 요소를 선택후
  const nums = document.querySelector("ul.nums");
  //2. 해당 요소의 HTML을 빈 문자열로 설정
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

//요소 탐색기
function findParent() {
  //child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector(".child2").parentNode); //parentNode는 모든 부모 노드 가능
  console.log(document.querySelector(".child2").parentElement); // 부모 "요소"인것 만 가능
  console.log(document.querySelector("html").parentNode); //부모가 document면 #document 출력
  console.log(document.querySelector("html").parentElement); //부모가 document면 null값으로 출력
  console.log($(".child2").parent());
}

function findParents() {
  //js는 없다
  //jquert 형식이다
  console.log($(".child2").parnets());
}

function findNext() {
  //child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector(".child2").nextElementSibling); //.nextElementSibling은 다음 형제 요소를 찾는 명령어
  console.log($(".child1").next());
}

function findPrev() {
  //child2 클래스 갖는 요소의 이전 형제 요소 찾기
  console.log(document.querySelector(".child2").previousElementSibling); //.previousElementSibling은 이전 형제 요소를 찾는 명령어
  console.log($(".child2").prev());
}

function findChildren() {
  //parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector(".parent").children);
  console.log($(".parent").children());
}

//클래스 조작하기
function addClass() {
  //hi 아이디 갖는 요소 선택하여 'fs-50' 클래스 추가
  document.querySelector("#hi").classList.add("fs-50");
  $("#hi").addClass("fs-50");
}

function removeClass() {
  //hi 아이디 같는 요소 선택해서 'fs-50' 클래스 삭제
  document.querySelector("#hi").classList.remove("fs-50");
  $("#hi").removeClass("fs-50");
}

function hasClass() {
  //hi 아이디 같는 요소 선택해서 'fs-50' 클래스 포함 여부 확인 (true/false)
  console.log(document.querySelector("#hi").classList.contains("fs-50"));
  console.log($("#hi").hasClass("fs-50"));
}

function toggleClass() {
  //hi 아이디 갖는 요소 선택해서 'bg-pink' 클래스 토글
  //   document.querySelector("#hi").classList.toggle("bg-pink");
  $("#hi").toggleClass("bg-pink");
}
