function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}


let debouned = debounce((name: string) => console.log(`My name is ${name}`), 2000);

debouned('Steve'); // 2초 뒤 "My name is Steve" 출력
