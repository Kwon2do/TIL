function solution(n) {
  var answer = new Set();
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.add(i);
      n /= i;
    }
  }
  return [...answer];
}
