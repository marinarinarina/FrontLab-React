// 디바운스: 특정 시간동안 발생하는 이벤트 중 마지막 이벤트만 처리.
// 쓰로틀: 이벤트 발생 주기를 조절. 한 주기당 처음 발생한 이벤트 한 번이 처리되고 그 후에 발생되는 나머지는 무시.

// 공통점: 빈번하게 발생하는 이벤트를 (특정 시간 이후에/일정한 간격으로) 한 번만 실행시키는 최적화 기법


// 디바운스 예제 - 윈도우의 리사이즈 이벤트를 받으면 레이아웃을 업데이트

const updateLayout = () => { /*레이아웃을 업데이트*/ };

//updateLayout는 0.3초마다 한 번씩만 호출
window.addEventListener("resize", debounce(updateLayout, 300)); 

const debounce = (fn, delay) => {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  }
};


// 쓰로틀 예제 - 웹페이지에서 스크롤 하는 동안(ex. 0.25초) 레이아웃을 업데이트하는 함수를 실행

const updateLayout = () => { /*레이아웃을 업데이트*/ };

window.addEventListener("scroll", throttle(updateLayout, 250));

const throttle = (fn, delay) => {
  let wait = false;
  
  return (...args) => {
    if(wait) return;
    
    fn(...args);
    wait = true;
    setTimeout(() => { 
      wait = false;
    }, delay);
  };
};
