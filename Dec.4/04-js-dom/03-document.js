console.log(document);
console.log(document.childNodes);
console.log(document.childNodes[1].childNodes);
console.log(document.childNodes[1].childNodes[2]);
//이렇게 일일이 접근하면 엄청 불편하기 때문에
//아래의 좋은 방법들이 생김

//아래의 방법을 더 많이 쓴다
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
//도메인 취소선 그어져있는 이유 1.해당속성의 사용을 권장하지 않는다, 더이산 지원되지 않을 가능성을 나타냄.
//최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할수 있기 때문에 지양한다

////////////////////////////////////

//dpcument 객체를 이용한 HTML
//1. 요소 선택
//한개씩의 id만 지목이 가능하다
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

//2. getElementsByClassName (HTMLCollection)

console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[2]);

//3. getElementsByTagName (HTMLCollection)

console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("h1"));

//4. getElementsByName (NodeList)
console.log(document.getElementsByName("id"));

//5.querySelector (CSS Selector)
//처음 발견한 하나만 가지고 온다
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));

//6. querySelectorAll (CSS Selector) (NodeList)

console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("#green"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll("div")[4]);
//그린을 구하는것

console.log("---------------------------");

// 유사 배열 (HTMLCollection, NodeList)
// [] 이런 배열과 비슷하지만 완전히 같지는 않은 객체 -  배열처럼 사용가능
//HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션
//배열 처럼 Index, length를 가짐
//하지만
//배열과 달리 사용가능한 메서드가 제한적이다

//1. HTMLCollection
//HTML 문서에서 특정 조건에 맞는 요고들을 실시간으로 컬렉션 형태로 반환
// 실시잔: 문서 내용이 변경되면 HTMLCollection도 즉시 업데이트
//HTML 요소 전용: 컬럭션에 포함된 항목은 항상 HTML요소
// 배열은 아님: 배열처럼 인덱스로 접그 ㄴ가능하나 . 배열 메서드 (forEach,map 등) 사용 불가능

//유사배열이기때문에 단일들은 안된다
//복수형태를 가지고 있는것들이 이런 형태를 띈다

// for문으로 가능하다
// console.log(document.getElementsByClassName("pink"));
const pinkElements = document.getElementsByClassName("pink");
for (let i = 0; i < pinkElements.length; i++) {
  console.log("pinkElements >>", pinkElements[i]);
}

// HTMLCollection -> forEach() 메서드 사용 x
//반복을 해야한다면
//Array변경 - Array.from

//Array.from()
//유사 배열 객체나 반복 가능한 객체를 실제 배열로 변환하는데 사용
// 또한 배열을 생성하면서 특정 로직을 적용할수도 있다

//Array.from(arrayLink, mapFunction, thisArg)
// arrayLike - 배열로 변활한 "유사 배열 객체"나 "반복 가능한 객체"
// mapFunction (선택) -  새 배열의 각 요소에 대래 실행항 매핑 함수
// thisArg (선택) - mapFunction을 실행할때 사용할 this 값

//1. 유사 배열 객체를 배열로 변환
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const array = Array.from(arrayLike);
console.log(array);

//2.문자열을 배열로 변환
const str = "hello";
const strArray = Array.from(str);
console.log(strArray);

//3. 숫자 범위 배열 생성
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range);

//_는 단순히 "인덱스를 이용해 배열을 생성한다는" 의도
//[0,1,2,3,4]

//매개변수 의미
//1. _
//배열의 각 요소 값을 나타냄
//배열을 생성할 떄 초기값은 기복적으로 undefined이므로 사용되지 않는 경우가 많음
//사용하지 않을 때는 관습적으로 _로 표현하여 '사용하지 않는 값' 임을 명시

//2. i
//현재 인덱스를 나타냄
//배열의 각 위치에서 몇번째 요소인지 알려줌

//4. HTMLCollection을 배열로 변환 하기 위해서 -> forEach 사용 가능
const htmlCollection = document.getElementsByTagName("div");
const array2 = Array.from(htmlCollection);
console.log(array2);

array2.forEach((elem) => console.log(elem));

//2. NodeList
// DOM에서 노드의 그룹을 반환 (텍스트 노드, 주석 노드 포함)
//정적: getElementsByName, querySelectorAll로 새아성한 것은 정적
//실시간: childNodes로 생선한것은 실시간

// NodeList => forEach() 반복문 사용가능
document.querySelectorAll(".pink").forEach((elem) => console.log(elem));
//한줄이면 중괄호 생략 가능

// for of 반복문

const pinks = document.querySelectorAll(".pink");
for (let pink of pinks) {
  console.log(pink);
}

//모든 요소  -> 모든 노드가 된다
//모든 노드가 -> 모든 요소는 아니다

/////////////////강의 쓴거//////////
