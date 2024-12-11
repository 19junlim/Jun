//실습 1
// 다음 userInfo 객체에서 구조 분해 할당을 사용하여 name과 age를 추출하고, 나머지 속성은 restInfo 객체에 저장하세요.

const userInfo = {
  name: "Lee",
  age: 25,
  job: "Developer",
  city: "Seoul",
};

const { name, age, ...restInfo } = userInfo;
console.log(name, age);
console.log(restInfo);

//실습 2
// 아래 두 배열을 스프레드 연산자를 사용하여 병합한 후,
// 구조분해 할당을 이용해 첫 번째와 두 번째 숫자를 first와 second 변수에 저장하고,
// 나머지 숫자들을 remaining 배열에 저장하세요.

const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];

const Nums = [...evenNumbers, ...oddNumbers];
console.log(Nums);

const [first, second, ...remaining] = Nums;
console.log(first);
console.log(second);
console.log(remaining);

//실습 3
// Shape(직사각형) 클래스의 속성 : 가로와 세로
// Shape 클래스의 매소드  : getArea()
// - 넓이 반환하는 메소드 (가로 * 세로)

// class Shape {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// let rec1 = new Shape(3, 4);
// console.log(rec1.getArea());

// 실습 4
/**
 * 1. Rectangle(직사각형) 클래스 만들기
 * - Shape 클래스 상속
 * - 사각형의 넓이 구하는 메소드 : getArea()
 * - 직사각형의 대각선 길이 구하는 메소드 추가
 * - Math.sqrt() 이용 : Math.sqrt(n**2) == n // Math.sqrt(9) == 3
 *   제곱근 구하는 함수
 *
 * 2. Triangle(삼각형) 클래스 만들기
 * - 넓이 반환하는 메소드 : getArea()
 *
 * 3. Circle(원) 클래스 만들기
 * - Shape 클래스를 상속
 * - width, height 이외에 radius 생성자 추가
 * - getArea() 메소드는 원의 넓이를 리턴.
 *
 * - Shape를 상속받은 각각의 클래스 Ractangle, Triangle, Circle 클래스를
 * 이용해서 인스턴스 하나씩 생성
 * - getArea로 사각형, 삼각형, 원의 넓이가 잘 나오는지 확인하기.
 */

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * height;
  }
}

class Ractangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}
