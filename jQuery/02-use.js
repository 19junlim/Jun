//val() - value

function getValue() {
  //js
  const inputVal = document.querySelector("input").value;
  alert(inputVal);
  //jQuery
  const value = $("input").val();
  console.log(value);
}

function setValue() {
  //js
  //   document.querySelector("input").value = "하이";

  //jQuery
  $("input").val("하이하이");
}

//css
function changeCssJs() {
  const span = document.querySelector("span");
  span.style.fontSize = "20px"; //인라인 방식
  span.style.color = "red";
}

function changeCssJquery() {
  //case1
  //   $("span").css("font-size", "40px"); //css 스타일
  //   $("span").css("color", "blue");

  //case2
  $("span").css({
    fontSize: "40px", //모든 span에 대해 폰트 크기 변경
    color: "blue", //모든 span에 대해 폰트 색상 변경
  });
}

function getCssJquery() {
  //js
  //   console.log(document.querySelector("span").style.color);
  //   style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음.

  //jquery
  console.log($("span").css("color"));
  //.css() 메서드는 브라우저에게 계산된 스타일 값을 반환
  //계산된 스타일을 변환하므로, 인라인 스타일 뿐만 아니라 모든 적용된 스타일 정보를 가져올수 이씀
  //반환 값은 대부분 RGB형식
}
