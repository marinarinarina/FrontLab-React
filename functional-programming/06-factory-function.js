// 객체를 반환하는 함수를 factory function이라고 한다. 
// 팩토리 함수는 일반적으로 create 접두사가 붙는다.
// 팩토리함수는 연산으로부터 데이터를 분리할 수 있다. 예를 들어 아래처럼 사용한다. 

// index.js
import {createIcecream, eatIcecream} from './Icecream';

eatIcecream(createIcecream());

// Icecream.js
export function createIcecream() {
  return {
    type: 'icecream',
    flaver: 'vanilla',
    scoops: 3
  };
}

export function eatIcecream(icecream) {
  if(icecream.scoops > 0) {
    return {...icecream, scoops: icecream.scoops - 1};
  } else {
    return icecream;
  }
}

// 리덕스의 createStore, configureStore도 팩토리 함수이다.
// redux의 createStore
function createStore(reducer) {
  let state;
  const listeners = [];
  
  const getState = () => state;
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };
  
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  
  return {
    getState,
    subscribe,
    dispatch
  };
}

// // configureStore는 객체를 받아 createStore를 리턴한다.
function configureStore(options) {
  // ...
  const {
    reducer = undefined,
    middleware,
    devTools = true,
    preloadedState = undefined,
    enhancers = undefined,
  } = options || {};
  
  let rootReducer;
  
  if (typeof reducer === 'function') {
    rootReducer = reducer;
  }
  // ...
  return createStore(rootReducer, preloadedState);
}
