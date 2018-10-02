export function add(a: number, b: number): number {
  return a + b;
}

export function sumOfArray(arr: number[]): number {
  return arr.reduce((a,b) => add(a,b), 0)
}