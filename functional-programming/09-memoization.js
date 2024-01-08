// 1. 일반적인 피보나치 재귀함수(시간 복잡도: O(2^n))
function fibonacciRecursive(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// 2. 메모이제이션 적용
function fibonacciRecursiveMemo(n, _cache) {
  let _cache = _cache || []; // [,,2,3,5,8,13]
  
  if (_cache[n]) return _cache[n]
  if (n <= 1) return 1;
  
  return _cache[n] = fibonacci(n - 1, _cache) + fibonacci(n - 2, _cache)
}

// 3. 메모이제이션을 적용하는 커링함수
function memoizer(fn) {
  let _cache = {};
  
  return function(n) {
    if(_cache[n] !== undefined) {
      return _cache[n];
    }
    let result = fn(n);
    _cache[n] = result;
    
    return result;
  };
}

const fibonacciMemoFunction = memoizer(fibonacciRecursive);

console.log(fibonacciMemoFunction(5));
