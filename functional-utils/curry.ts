// reference: https://velog.io/@typo/advanced-javascript-functions-to-improve-code-quality

// usage
function sum(a: number, b: number, c: number) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));


// implement curry
function curry<T extends Function>(fn: T): Function {
  const fullArgCount = fn.length; 
  return function createSubFn(...args: unknown[]): Function {
    if(args.length > fullArgCount) {
      throw new Error('Too many arguments');
    }
    if(args.length < fullArgCount) {
      return createSubFn.bind(null, ...args);
    }
    return fn.call(null, ...args);
  } 
}
