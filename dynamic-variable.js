// 객체를 하나 생성하고, 키값으로 변수명을 할당한다.
const fnMap = new Map<string, number>();

for(let i = 0; i < 10; i++) {
    fnMap.set(`variable${i}`, i);
}

console.log(fnMap);
/*
{"variable0" => 0,
"variable1" => 1,
"variable2" => 2,
...,
"variable9" => 9} 
*/

// ES6 - computed property name
// 객체의 key값을 표현식을 통해 지정하는 방법
// 객체 안에 함수명을 동적으로 할당할 수 있음.
const count = 'setCount';
const password = 'setPassword';
const toggle = 'setToggle';

const obj = {
    [count]: () => '카운터를 증가시킵니다.',
    [password]: () => '비밀번호를 설정합니다',
    [toggle]: () => '토글 버튼을 온오프합니다',
}

console.log(obj['setCount']()); // '카운터를 증가시킵니다.'
console.log(obj['setPassword']()); // '비밀번호를 설정합니다'
console.log(obj['setToggle']()); // '토글 버튼을 온오프합니다'
