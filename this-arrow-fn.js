// 일반적으로 콜백함수에서 this는 전역 객체를 참조한다.
function example_cb() {
  function sayHello(name, callback) {
    const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';
    callback(words);
}

sayHello("Marina", function printing(name) {
  console.log(this); 
  console.log(name);
});
}

example_cb(); // Window {...}


// 하지만 화살표함수에서 this는 상위 스코프의 this를 참조한다.
function example_arrow() {
  function sayHello(name, callback) {
    const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';
    callback(words); 
  }

  const printing = (name) => {
    console.log(this); 
    console.log(name); 
  }

  sayHello("Marina", printing);
}

example_arrow(); // { example: [Function: example] }
