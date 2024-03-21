function solution(age) {
  //97 ~ 106
  //만약, 2라면 97+2 = 99 -> c가 됨
  let arr_age = String(age).split("");
  let answer = "";
  arr_age.map((el) => {
    let gap = Number(el);
    answer += String.fromCharCode(97 + gap);
  });
  return answer;
}

//다른 풀이
function solution(age) {
  return (
    age
      .toString()
      .split("")
      //머리 진짜 좋다 ..
      .map((v) => "abcdefghij"[v])
      .join("")
  );
}
