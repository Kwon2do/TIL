function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    }
  }
  return answer;
}

//반복횟수 줄이기
function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i += 2) answer += i;

  return answer;
}
