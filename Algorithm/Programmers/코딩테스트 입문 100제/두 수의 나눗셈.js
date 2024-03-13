function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

//다른 사람 풀이) Math.trunc()는 소수점 이하는 다 버림.
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}
