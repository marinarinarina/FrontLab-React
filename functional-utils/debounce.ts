function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

let sayName = debounce((name: string) => console.log(`My name is ${name}`), 2000);

sayName('Steve');
sayName('Steve');
sayName('Steve');
sayName('Steve'); // 2초 뒤 "My name is Steve" 한 번만 출력
