/*
커링은 함수형 프로그래밍에서 여러 인수가 있는 함수를 중첩 함수 시퀀스로 변환하는 기법이다.
ex. f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합되도록 변환

즉, 함수가 한 번에 모든 인수를 받는 대신, 첫 번째 인수를 받고 두 번째 인수를 받는 새 함수를 반환하고, 세 번째 인수를 받는 새 함수를 반환하는 식으로 모든 인수가 충족될 때까지 반복하는 것.
*/

// curried function
function sum(a) { 
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6

// 위 코드를 풀어쓰면 아래와 같다:
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6


// 커링을 사용하면 서로 다른 시점에 인수를 전달할 수 있다. 커링을 언제 사용해야 할까?

// ex. 아이스크림 주문 목록에서 '소프트 아이스크림'에 해당하는 주문만 뽑아내는 함수
const icecreams = [
  {"soft":true, "flavour":"strawberry"},
  {"soft":false, "flavour":"strawberry"},
  {"soft":false, "flavour":"cherry"},
  {"soft":true, "flavour":"orange"},
  {"soft":false, "flavour":"lemon"},
];

const softIcecream = icecreams.filter((icecream) => icecream["soft"] === true);
console.log(softIcecream);

// 여기서 '딸기맛'에 해당하는 주문만 뽑아내는 함수는 softIcecream을 복붙해서 사용할 수 있다.
// 하지만 icecreams에서 속성 100개가 추가되고, 각 속성을 필터링하는 함수를 만들어야 한다면? 동일한 코드를 100번을 더 작성해야 한다.
// 이럴 경우 curried function을 만들면 된다:
const checkProperty = propertyName =>
                      expectedValue =>
                        object =>
                          object[propertyName] === expectedValue;

const softIcecreams = icecreams.filter( checkProperty("soft")(true) );
console.log(softIcecreams);

const strawberryIcecreams = icecreams.filter( checkProperty("flavour")("strawberry") );
console.log(strawberryIcecreams);
