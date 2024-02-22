// prototype으로 스택, 큐 구현하기

const Stack = require('./DS/Stack.js');
const Queue = require('./DS/Queue.js');

const st1 = new Stack([1, 2, 3]);
const st2 = new Stack([1, 2, 3]);
const q = new Queue([1, 2, 3, 4, 5]);

st1.push(4);
st1.print();

st2.pop();
st2.print();

q.enqueue(10);
q.dequeue();
q.print();

console.log(st2.peek());
console.log(q.peek());
