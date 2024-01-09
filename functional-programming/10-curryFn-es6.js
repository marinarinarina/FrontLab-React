const compose = (...fns) => () => fns.reduce((res, fn) => fn(res), obj);

const addAB = ({a, b}) => a + b;

const sqare = (factor) => (num) => Math.pow(num, factor);

const dividInteger = (factor) => (num) => Math.floor(num / factor);

const obj = {
  a: 2,
  b: 3
};

const result = compose(
  addAB,
  sqare(2),
  dividInteger(5)
)(obj);

console.log(result) // 5
