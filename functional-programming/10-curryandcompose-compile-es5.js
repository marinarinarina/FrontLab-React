const compose = (...fns) => (obj) => fns.reduce((res, fn) => fn(res), obj);

const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...nextArgs) => curry(fn, ...args, ...nextArgs);

const addAB = ({a, b}) => a + b;

const sqare = curry((factor, num) => Math.pow(num, factor));

const dividInteger = curry((divider, num) => Math.floor(num / divider));

const obj = {
  a: 2,
  b: 3
};

console.log(sqare); // (...nextArgs) => curry(fn, ...args, ...nextArgs)
console.log(sqare(2)); // (...nextArgs) => curry(fn, ...args, ...nextArgs)
console.log(sqare(2)(3)); // 9

const result = compose(
  addAB,
  sqare(2),
  dividInteger(5)
)(obj);

console.log(result); // 5


// es5 구문으로 컴파일:
function compose() {
  for (
    var _len = arguments.length,
    fns = new Array(_len),
    _key = 0; _key < _len; _key++
  ) {
    fns[_key] = arguments[_key];
  }
  return function reduceFn(obj, i=0) {
    if(i < fns.length) return rfn(fns[i](obj), i + 1);
    return obj;
  };
};

function curry(fn) {
  for (
    var _len2 = arguments.length,
    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
    _key2 = 1; _key2 < _len2; _key2++
  ) {
    args[_key2 - 1] = arguments[_key2];
  }
  return args.length >= fn.length ? fn.apply(void 0, args) : function () {
    for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      nextArgs[_key3] = arguments[_key3];
    }
    return curry.apply(void 0, [fn].concat(args, nextArgs));
  };
};
