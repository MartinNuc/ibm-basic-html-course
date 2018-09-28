
function fibonaci(x) {
  let fib = [0, 1];
  for(let i = 2; i <= x; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[x];
}

console.time('fib');
let value = fibonaci(34);
console.timeEnd('fib');
console.log(value);
