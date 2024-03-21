function solution(n) {
  var answer = [];
  let arr = Array(n)
    .fill(1)
    .map((el, index) => el + index);
  arr.map((el) => {
    n % el === 0 ? answer.push(el) : "";
  });
  // answer.sort((a, b) => a - b);
  return answer;
}

//다른 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
