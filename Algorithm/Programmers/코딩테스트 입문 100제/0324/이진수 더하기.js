function solution(bin1, bin2) {
  //num.toString(특정진수) : 특정 진수로 변환
  //parseInt(str,2) : 2진수인 str을 10진수로
  let num = parseInt(bin1, 2) + parseInt(bin2, 2);
  let answer = num.toString(2);
  return String(answer);
}
