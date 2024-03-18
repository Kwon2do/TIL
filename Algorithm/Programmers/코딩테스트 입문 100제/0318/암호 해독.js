function solution(cipher, code) {
  let arr = cipher.split("");
  let answer = "";
  arr.map((el, index) => {
    //index가 정수가 아닌 문자로 되어있어서 형변환해줘야 계산 됨.
    if (Number(index + 1) % code == 0) answer += el;
  });
  return answer;
}
