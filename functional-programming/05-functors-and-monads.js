/*
1. 컨테이너와 functor
*/



// ex. map 메서드를 직접 구현해보자!

// 1. identity: 최소한의 기능을 순수 함수로 구현한다. 
myFunctor.map( x => x) === myFunctor

// 2. composition 또는 chaining: 이렇게 나누어진 함수를 합친다.(함수 합성)
myFunctor.map( x => f(g(x)) ) === myFunctor.map(g).map(f)
