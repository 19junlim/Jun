let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// removeClass & addClass
// function changeColor() {
//     let currentClass = $('div').attr('class'); // 현재 클래스 가져오기.
//     console.log(currentClass); // red

//     let currentIndex = colors.indexOf(currentClass);
//     console.log(currentIndex); // 0

//     // #1. 다음 색상 전환
//     // currentIndex : 0 ~ 5 사이 숫자
//     // colors.lenght - 1 : 5
//     // let nextClass =
//     //     currentIndex === colors.length - 1
//     //         ? colors[0]
//     //         : colors[currentIndex + 1];

//     // console.log('nextClass >>>> ', nextClass);

//     // #2. Random 색상 전환
//     // 0 <= x < 6 --- 5.xxxx
//     let randomIndex = Math.floor(Math.random() * colors.length); // 정수 0 <= x < 6
//     let nextClass = colors[randomIndex];

//     // 클래스 교체
//     $('div').removeClass(currentClass).addClass(nextClass);
// }

// 해설 (switchClass())
// SwitchClass(제거할 클래스, 추가할 클래스, [duration])
// - 애니메이션 효과
// - jQuery 메서드가 아님.
// - jQuery UI 라이브러리 필요.

function changeColor() {
  let currentClass = $("div").attr("class"); // 현재 클래스 가져오기
  console.log(currentClass); // red

  let currentIndex = colors.indexOf(currentClass);
  console.log(currentIndex); // 0

  // if (currentIndex === colors.length - 1) {
  //     $('div').switchClass(currentClass, colors[0]);
  // }

  currentIndex === colors.length - 1
    ? $("div").switchClass(currentClass, colors[0], 1000)
    : $("div").switchClass(currentClass, colors[currentIndex + 1], 1000);
}

///////////////////////
