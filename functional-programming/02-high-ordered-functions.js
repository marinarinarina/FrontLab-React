// 온라인 쇼핑몰 결제 로직을 고차함수를 이용해 구현해보자!
import _ from 'underscore'; // 고차함수를 활용한 유틸리티 함수 라이브러리

// 1. 장바구니 배열에서 타입이 프라임인 상품 추출하기
const cart = [
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

const isPrime = (item) => item['type'] === 'prime';

const primeItems = (cart) => cart.filter(isPrime);

// 2. 장바구니 배열에서 타입이 프라임이 아닌 상품 추출하기
const notPrimeItems = (cart) => {
  return _.reject(cart, (item) => {
    return item['type'] === 'prime';
  });
};

// 3. 장바구니 배열의 tech 제품만 20% 할인 적용하기
const applyCoupon = (cart) => {
  return cart.map((item) => {
    return item['category'] === 'tech'
      ? Object.assign({}, item, {'price': item.price * 2})
      : item;
  });
};

// 4. 총 주문한 금액을 반환하기
const totalCost = (cart) => cart.reduce((total, item) => total + item.price, 0);
