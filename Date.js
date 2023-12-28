// 자바스크립트 Date 객체 정리

// 기본 사용법 - new Date와 Date
const today = new Date();
console.log(today.toString());

const todayToString = Date();
console.log(todayToString);

// 자바스크립트에서 month는 1월이 0부터 시작함. 12월은 11임.
const newyear = new Date(2024, 0, 1);
console.log(newyear.getFullYear());
console.log(newyear.getMonth());

// 날짜
console.log(newyear.getDate()); 

// 요일(0~6)
console.log(newyear.getDay()); 

// Date 객체를 일반적인 날짜 포맷 문자열로 반환
console.log(newyear.toDateString()); // "Mon Jan 01 2024"

const christmasDinner = new Date('2023/12/25/18:30');
console.log(christmasDinner.toString());
console.log(christmasDinner.toTimeString());

// 몇일 전, 몇일 후 날짜 계산하기
function getPastOrFutureDate(offset) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + offset));
}

console.log(`현재: ${new Date()} \n어제: ${getPastOrFutureDate(-1)} \n 내일: ${getPastOrFutureDate(1)}`);



