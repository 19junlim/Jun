// 클래스 기본 문법

// 1. class: 캘라스를 정의 할때 사용하는 키워드
class House {
  // 2. constructor : 클래스의 생성자
  // - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
  constructor(year, name, window) {
    // 3. this: 클래스 내부에서 현제 인스턴스를 참조하는 객체
    // - 인스턴스의 속성, 메서드에 접근할 때 사용

    //여기는 이름을 새로 지어주는것이다 위 매개변수랑 상관 없다 = 다음에 오는것이 매개변수 를 명하는것
    this.year = year;
    // - 현재 인스턴스 (this)에 속성(name)을 추가하고, 그 값을 매개면수 name으로 설정하는것
    this.name = name;
    this.window = window;
  }
  // 4. 메서드 : 클래스 내부에 정의된 함수
  // - 해당 클래스의 인스턴스에서 호출 가능
  getAge() {
    console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요!`);
  }
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
  }
}

// 5. 인스턴스: 클래스로부터 생성된 실제 객체 - new 키워드 사용하여 생성
// 클래스 - 설계도
// 인스턴스 - 설계도로 만들어진 "실제 집"
// - 각각 독립적인 객체 (= 각자 자신만의 this를 가짐)
const house1 = new House(1990, "롯데", 1);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 함.
console.log(house1); // House {year: 1990, name: '롯데', window: 1}
// 클래스 명을 가짙채로 찍혀 나왔다
console.log(typeof house1); // object
console.log(house1.year); // 1990
house1.getAge(); // 롯데는 건축한지 34년 되었어요!
// house1 에 새로넣어준 정보들을 가지고 위에 만들어둔 식을 풀어서 답을 준것
house1.getWindow(); // 롯데의 창문은 1개 입니다

const house2 = new House(2015, "Acro", 2);
console.log(house2); // House {year: 1994, name: 'Acro', window: 2}
house2.getAge(); // Acro는 건축한지 9년 되었어요!

/////////////////////////////////
// 클래스의 상속
// - 상속을 통해 다른 클래스의 기능을 재사용 가능하다
// - 'extends' 키워드를 사용하여 상속 구현
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // 6. super(): 부모 클래스의 생성자를 호출 할때 사용
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name}아파트의 총 층수는${this.floor}이며, 창문의 개수는 ${this.window}이다`;
  }
  //똑같은 이름이지만 부모랑 다르게 쓸거야 할때
  // 7. override : 부모의 매소드와 같은 함수를 재정의할때
  // - 부모 클래스에서 정의된 메서드를 자식 클래스에서 "새롭게 재정의" 하거나 '변경' 하는것을 의미한다
  // - 주로, 부모 클래스에서 제공한 기본 동작을 '자식 클래스의 특성에 맞게 수정' 할때 사용

  // --규칙
  // - 메서드 이름, 매개변수 리스트가 부모 클래스와 "동일" 해야함 (무조건 동일한 상태에서 추가만 하는것)
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}
// new 뒤에 새로 찍어낼 틀
const apt1 = new Apartment(2024, "레미안", 3, 15, "3M");
console.log(apt1); // Apartment {year: 2024, name: '레미안', window: 3, floor: 15, windowMaker: '3M'}
console.log(apt1.getAptInfo()); // 2024년에 지어진 레미안아파트의 총 층수는15이며, 창문의 개수는 3이다
console.log(apt1.getWindow()); // 레미안 아파트의 3 개의 창문은 3M 회사에서 생산되었습니다.
