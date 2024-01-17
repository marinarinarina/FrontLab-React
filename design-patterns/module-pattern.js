/* 모듈 패턴:
클래스 안에서 변수와 함수를 모두 정의하듯이
관련있는 변수와 함수를 모아 IFFE로 감싸서 하나의 모듈을 만드는 것.
클래스의 private 변수, constructor 역할은 클로저가 하고,
외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
*/

const Heap  = (function() {
    let _heap = [];
    
    const size = () => _heap.length;
  
    const peek = () => _heap[0] || -1;
  
    const empty = () => _heap.length === 0;
  
    const push = (data) => {
        _heap.push(data);
          let i = _heap.length - 1;
          
          while(i > 0) {
            const parent = ~~((i - 1) / 2);
            if(_heap[parent] <= _heap[i]) break;
            [_heap[i], _heap[parent]] = [_heap[parent], _heap[i]];
            i = parent;
           }
    };
  
     const pop = () => {
       if(_heap.length === 0) return;
          const v = peek();
       [_heap[0], _heap[_heap.length - 1]] = [_heap[_heap.length - 1], _heap[0]];
       _heap.pop();
       _heapify();
       
       return v;
     };
    
    const _heapify = () => {
      const [x, n] = [peek(), _heap.length];
      let cur = 0;
      
      while(2 * cur + 1 < n) {
        const leftChild = 2 * cur + 1;
        const rightChild = leftChild + 1;
        const smallerChild = 
              rightChild < n && _heap[rightChild] < _heap[leftChild]
                ? rightChild
                : leftChild;
        
        if(x > _heap[smallerChild]) {
          [_heap[cur], _heap[smallerChild]] = [_heap[smallerChild], _heap[cur]];
          cur = smallerChild;
        } else break;
      }
    };
  
    return {
        size: size,
        empty: empty,
        peek: peek,
        push: push,
        pop: pop,
    };
})();

console.log(Heap.peek()); // -1
Heap.push(5)
console.log(Heap.peek()); // 5
Heap.push(3);
console.log(Heap.peek()); // 3
Heap.push(1);
console.log(Heap.peek()); // 1

for(let i = 0; i < 3; i++) {
  console.log(Heap.pop()); // 1 3 5
}

Heap.push(2);
console.log(Heap.pop()); // 2
