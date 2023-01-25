const fibonacci = (value: number, memo: number[] = []) => {
  if (value === 0) return 0;
  if (value === 1) return 1;
  if (memo[value]) return memo[value];
  
  memo[value] = fibonacci(value - 2, memo) + fibonacci(value - 1, memo);
  return memo[value];
}

export default fibonacci