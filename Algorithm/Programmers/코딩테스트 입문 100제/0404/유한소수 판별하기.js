function solution(a, b) {
  //일단 기약분수로 표현
  //분모 소인수가 2,5 이 외에 또 있으면 탈락
  let num = 1;
  // 최대공약수 구해서 num에 저장하기
  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) num = i;
  }
  b = b / num;
  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;
  return b == 1 ? 1 : 2;
}

//다른사람 풀이
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}
