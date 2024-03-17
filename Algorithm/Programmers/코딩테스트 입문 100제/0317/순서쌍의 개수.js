//시간초과ㅠ
function solution(n) {
  var answer = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      i * j === n ? answer++ : "";
    }
  }
  return answer;
}

//풀었다
function solution(n) {
  var answer = 0;
  let arr = Array(n)
    .fill(1)
    .map((v, i) => v + i);

  arr.map((el) => {
    n % el === 0 ? answer++ : "";
  });

  return answer;
}
