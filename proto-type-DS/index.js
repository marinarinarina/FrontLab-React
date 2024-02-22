// prototype으로 스택, 큐, 우선순위큐 구현하기

function setDataAllDs(dataStructures) {
  return (n) => dataStructures.map(ds => setData(ds, n));
}

function setData(ds, n) {
  for(let i = 1; i <= n; i++) {
    ds.insert(i);
  }
};

const stack = new Stack();
const queue = new Queue();
const pq = new PriorityQueue();

setDateAllDs(stack, queue, pq)(10);

console.log(stack.every(testFn)); // true;
