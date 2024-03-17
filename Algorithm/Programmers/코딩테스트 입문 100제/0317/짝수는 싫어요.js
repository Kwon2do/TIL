function solution(n) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    i % 2 != 0 ? arr.push(i) : "";
  }
  arr.sort((a, b) => a - b);
  return arr;
}

//다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 === 1);
}
