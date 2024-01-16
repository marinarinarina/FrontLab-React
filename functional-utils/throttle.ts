function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, wait: number) {
    let shouldWait = false;
    return (...args: Parameters<T>) => {
        if (!shouldWait) {
            shouldWait = true;
            fn.call(null, ...args);
            setTimeout(() => shouldWait = false, wait);
        }
    };
}


let throttledFn = throttle((order: number) => console.log(`${order}번 실행`), 1000);

for(let i = 1; i < 10; i++) {
  throttledFn(i); // "1번 실행"
}
