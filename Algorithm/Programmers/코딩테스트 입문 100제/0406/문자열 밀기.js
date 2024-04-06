function solution(A, B) {
  //hello,ohell,lohel,llohe,elloh,hello
  //문자열 길이+1만큼 돌면 원위치 됨
  //그 사이에 B랑 일치하는지만 확인
  let answer = 0;
  let str = A.split("");
  for (let i = 0; i < str.length; i++) {
    if (A == B) return 0;
    let tmp = str.pop();
    str = [tmp, ...str];
    if (str.join("") == B) {
      answer = i + 1;
      break;
    }
  }
  return answer > 0 ? answer : -1;
}
