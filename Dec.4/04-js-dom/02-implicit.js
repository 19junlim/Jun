// JS 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS환경에서 사용할 수 있는 내장 객체들을 말한다.
// - 자주 사용되는 기능들을 미리 구현해 놓은 것.

// #1. Date 객체: 시간, 날짜

// 날짜 생성하여 저장.
let now = new Date();
console.log(now);

// new Date(TimeStamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000); // 24 시간.
console.log(jan_02_1970);

// 타임스탬프 (TimeStamp)
// - 특정 시점의 날짜와 시간을 "숫자로 표현한 값"
// - 보통 "에포크" 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄.

// Q) 에포크(Epoch)??
// - 특정 시간의 기준점.
// - 1970년 1월 1일 09:00:00 UTC를 기준.

// Q2) Why? 왜 1970년 1월 1일이 기준인가요?
// A) 1. 역사적인 이유
//       - 유닉스 OS에서 타임스탬프를 처음 정의할 때 사용한 날짜. (유닉스 시스템이 등장한 시점)
//       - 당시 컴퓨터 시스템의 기준 시간으로 설정된 것.
//    2. 기술적인 편의성
//       - 시간을 숫자로 표현하여 계산하기가 수학적으로 편리함.

// new Date(date_string)
let date = new Date("2024-12-04");
console.log("date > ", date); // Wed Dec 04 2024 09:00:00 GMT+0900

let date2 = new Date("2024", "11", "04"); // MM(0 ~ 11) [1월 ~ 12월]
console.log("date2 > ", date2);

// * 관련 메서드
// - 객체 점 접근법
// getDate(): '월'의 몇 번째 날인지 반환합니다.
// getDay(): '주'의 몇 번째 날인지 반환합니다. (0부터 시작)
// getMonth(): 몇 번째 달인지 반환합니다. (0부터 시작)
// getHours(): 시간을 반환합니다. (0부터 23까지)
// getMinutes(): 분을 반환합니다. (0부터 59까지)
// getSeconds(): 초를 반환합니다. (0부터 59까지)
// getMillisesons(): 밀리초를 반환합니다. (0부터 999까지)
// getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간을 반환합니다.

console.log(now.getFullYear()); // 2024 - 년도 반환.
console.log(now.getMonth() + 1); // 12
console.log(now.getDate());
console.log(now.getDay()); // 0(일) ~ 6(토)
console.log(now.getHours()); // 11
console.log(now.getMinutes()); // 45
console.log(now.getSeconds()); // 30
console.log(now.getMilliseconds()); // 0 ~ 999
console.log(now.getTime()); // 1733280366146

console.log("----------------------");
// Math 객체
// 수학적인 상수와 함수

// * 속성
console.log(Math.E); // 2.718281828459045 자연 로그
console.log(Math.PI); // 3.141592653589793 파이
console.log(Math.SQRT2); // 1.4142135623730951 2의 제곱근 = 루트

// 메서드
console.log(Math.min(100, -2, 0, 5)); // -2 최소값 출력.
console.log(Math.max(100, -2, 0, 5)); // 100 최대값 출력
console.log(Math.round(5.3124)); // 5 -> 반올림
console.log(Math.round(5.8124)); // 6
console.log(Math.ceil(5.3124)); // 6 -> 강제 올림
console.log(Math.floor(5.7124)); // 5 -> 강제 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10

// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// Quiz
// Q1) 1 ~ 100
console.log(Math.floor(Math.random() * 100) + 1); // 0 <= x < 100  ==> "1 <= x < 101"

// Q2) 20 ~ 22
console.log(Math.floor(Math.random() * 3) + 20); // 0 <= x < 1  ---> 0 <= x < 3 ---> 20 <= x < 23 ==> 22.xxx

/////////////내가 쓴 것//////////////

let now = new Date();
console.log(now);

let jan_02_1970 = new Date(24 * 3600 * 1000); //밀ㄹ초 단위 까지 해줘야함
console.log(jan_02_1970);

// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

// new Date(date_string)
let date = new Date("2024-12-04");
console.log(date);

let date2 = new Date("2024", "11", "04");
console.log(date2);

// 관련 메서드
// 객체 점 접근법
//getDate
console.log(now.getMonth() + 1);

// Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E); //자연 로그
console.log(Math.PI); //파이
console.log(Math.SQRT2); //2의 제곱근 = 루트

// 메서드
console.log(Math.min(100, -2, 0, 5)); //최소값 출력
console.log(Math.max(100, -2, 0, 5)); //최대값 출력
console.log(Math.round(5.3124));
console.log(Math.round(5.782));
console.log(Math.ceil(5.1234));
console.log(Math.floor(5.67));
console.log(Math.random()); //0 <= x < 1 영과 1사이의 아무 숫자

console.log(Math.random() * 10); //0 과 10의 사이 숫자들이 나온다
//하지만 0에서 9를 뽑고 싶으면
console.log(Math.floor(Math.random() * 10));
//Math.floor로 한번더 감싸주면 뒤의 소수점들을 없애고 그냥 숫자만 나올수있다

console.log(Math.floor(Math.random() * 100) + 1);
//random() * 100을 하면 0과 99.xxxx의 숫자가 나오는거
//그래서 뒤에 1을 더해주고 소숫점을 날려주는것이다.

//Q) 20 ~ 22
console.log(Math.floor(Math.random() * 3) + 20);
//random() * 3을 하면 0과 2.xxxxx사이의 숫자가 나오는것
//그래서 floor로 강제내림과 소숫점을 없애서 20 과 22 사이의 숫자를 구할수있는것.
// 0 <= x < 1
// 0 <= x < 3
// 0 1 2 2.xxxxx

// 20 <= x < 23
// 20 21 22 22.xxxxx
// 20 21 22

// 0 1 2 => 0 <= x <= 2    +20
// 20 <= x <= 22
// 20 21 22

//지금은 이렇게 해도 상관없지만 나중에는 문제가 생길수있다 그래서 흐름상으로 밖에다가 숫자를 더해주는게 더 좋다.

console.log("2" + Math.random() * 3);
//이렇게만하면 숫자가아닌 문자열로 나온다

// 20 ~ 22
console.log(
  Math.floor("2" + Math.random() * 3),
  typeof Math.floor("2" + Math.random() * 3)
);
//하지만
//type of 를 사용하면서 문자였던것을 숫자형으로 바꿔주면서 결과 값을 구할수 있다.

//////////////실습/////////////////

//주말과 평일

//랜덤 숫자 뽑기

console.log(Math.floor(Math.random() * 11));