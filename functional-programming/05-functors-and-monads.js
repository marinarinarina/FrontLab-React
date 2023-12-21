// 함수형 프로그래밍으로 작성하는 방법:
// 1. identity: 최소한의 기능을 순수 함수로 구현한다. 
myFunctor.map( x => x) === myFunctor
// 2. composition 또는 chaining: 이렇게 나누어진 함수를 합친다.(함수 합성)
myFunctor.map( x => f(g(x)) ) === myFunctor.map(g).map(f)

// 함수형 프로그래밍에서는 절대로 데이터를 그대로 사용해서는 안 된다.
// 항상 컨테이너로 감싸서 사용해야 함
// functor: 단항 함수로 매핑할 수 있는 컨테이너. "어떤 값을 들고 있는 구조와 구조를 유지한 채 그 값에다 함수를 적용할 수 있는 인터페이스의 조합"
const newTuple = (a,b) => {
    let tuple = {a: a, b: b};
    tuple.map = callback => newTuple(callback(tuple.a),callback(tuple.b));
    return tuple;
}

const tuple = newTuple(4,3);
console.log(tuple.a); // 4
console.log(tuple.b); // 3

const tupleIdentity = tuple.map( x => x * 2 ); // "{\"a\":4,\"b\":3}"
console.log(JSON.stringify(tuple), JSON.stringify(tupleIdentity)); // "{\"a\":8,\"b\":6}"

// Monad는 예제로 직관적으로 이해하는 것이 더 빠름: map과 flatMap
const duplicate = x => [x,x];
const arr1 = [1,2,3];
console.log(arr1.map(duplicate)); // [[1, 1], [2, 2], [3, 3]]

//  flatMap의 콜백: 또 다른 모나드를 반환하고, flatMap의 작업은 언패킹하는 것.
function flatMap(callback) {
    let newArr = [];
    this.forEach(x => {
        newArr = newArr.concat(callback(x)) // 기존 배열을 변경하지 않고 새 배열을 반환
        console.log(newArr);
    });
    return newArr;
}

Array.prototype.flatMap = flatMap;

const arr2 = [1,2,3,4];
console.log(arr2.flatMap(duplicate)); // [1, 1, 2, 2, 3, 3, 4, 4]
/* 
flatMap은 시스템의 이전 상태를 가지고 새로 변화시킨다.
위 코드의 newArr의 변화:
[1, 1]
[1, 1, 2, 2]
[1, 1, 2, 2, 3, 3]
[1, 1, 2, 2, 3, 3, 4, 4]
*/

// 즉 Manad는 펑터인 동시에 내부의 값에 직접 함수를 적용할 수 있는 구조와 인터페이스이다.
// ex. Gambler Monad: 여러 번 게임을 하고 때로는 이기고 때로는 지는 겜블러 모나드를 만들어 보자. 파산하면 더 이상 게임을 할 수 없다.

// 아래는 잘못된 케이스임:
const initialMoney = 1000;
const transactions = [500,-2000,+1000]; // 1판: 500달러 얻음, 2판: 2000달러 잃음, 3판: 1000달러 얻음

const final = transactions.reduce( (x,y) => x+y , initialMoney);
console.log(final); // money의 변화: $1000 --> $1500 --> $-500 --> $500. 하지만 남은 돈이 0원 이하면 파산이므로 게임이 중단되어야 한다.

// 굿 케이스:
const newGambler = type =>{
    let gambler = {}
    gambler.flatMap = callback =>
                        gambler.type === "Playing" ? // 현재 상태가 '게임 중'이라면
                        callback(gambler.money) : // 도박을 한다.
                        newGambler("Bankrupt") // 아니라면 현재 상태는 '파산'이 된다.

    if (type === "Bankrupt") { // 초깃값 설정
        gambler.type = "Bankrupt"
        return gambler
    } else { // 초깃값 설정
        return money => {
            gambler.type = "Playing"
            gambler.money = money
            return gambler
        }
    }
}

const transaction = amount => // 현재 상태와 현재 가진 금액을 새롭게 리턴하는 함수
                        gamblersMoney =>
                            gamblersMoney + amount > 0 ? // 게임을 한 후에도 여전히 남은 돈이 있다면
                            newGambler("Playing")(gamblersMoney + amount) : // 상태는 여전히 '게임 중'이며 남은 돈을 업데이트한 새로운 객체를 리턴.
                            newGambler("Bankrupt") // 아니라면 상태를 '파산'으로 업데이트한 새로운 객체를 반환

let gambler = newGambler("Playing")(1000) // $1000를 가진 새로운 겜블러
gambler = gambler.flatMap(transaction(500)).flatMap(transaction(-2000)).flatMap(transaction(1000)) // 게임을 진행.

console.log(gambler.type) // "Bankrupt"



