
interface Calculator {
  pi: number;
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

let calc: Calculator = {
  pi: 3.14,
  add(a, b) {
    return a+b;
  },
  subtract: function(a: number, b: number) {
    return a - b;
  }
};