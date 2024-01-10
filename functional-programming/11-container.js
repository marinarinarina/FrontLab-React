/*

함수형 프로그래밍에서는 데이터를 컨테이너(오브젝트)에 넣어 추상화한다.

컨테이너는 오직 데이터만 가지고 있다.
우리는 데이터가 필요할 때 컨테이너에서 데이터를 꺼내와서 사용한다.

functor는 map함수를 가지고 있는 컨테이너다.

map은 인풋을 가져와 새로운 아웃풋을 만드는 함수이다.
*/

// 데이터를 담는 컨테이너 클래스
class Container {
	constructor(value) {
    this.$value = value;
  }

	static of (value) {
    return new Container(value);
  }
  // 인자로 받은 함수에 현재 값을 넣어 새로운 값을 반환하는 map
	map(fn) {
		return new Container(fn(this.$value));
	}
}

const addFive = (num) => {
  return num + 5;
}

Container.of(1).map(addFive) // Container(6)
Container.of(1).map(addFive).map(addFive); // Container(11)


// Array는 펑터인가? -> Yes!
// arr.map은 새로운 배열을 받아 새로운 배열을 만드는 함수이다.
const arr = [8, 10, 23, 35, 54];
const arr2 = arr.map((x) => Math.pow(x, 2));


// 함수는 컨테이너인가? -> Yes! (함수는 동적으로 계산되는 데이터를 반환하기 때문)
const f = (x) => x * 2; // 기댓값: 2, 4, 6, 8, 10, ... 즉 무한한 값을 가진 배열임.


// 함수는 펑터인가? -> Yes! (함수에 대한 map을 정의할 수 있다.)
// fnMap은 함수를 가져와서 그 함수의 결과에 다른 함수를 적용하는 함수다.
const fnMap = (f, mappingFn) => (x) => f(mappingFn(x));
const g = (x) => x + 10;

// 즉 두 함수를 결합한 새로운 함수를 반환한다.
const fg = fnMap(f, g);

console.log(fg); // Function
console.log(fg(5)); // 30
