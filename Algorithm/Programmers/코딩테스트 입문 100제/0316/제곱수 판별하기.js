function solution(n) {
  var answer = n ** (1 / 2);
  return answer % 1 == 0 ? 1 : 2;
}
