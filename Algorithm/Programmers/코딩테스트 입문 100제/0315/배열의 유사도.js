function solution(s1, s2) {
  let answer = 0;
  s1.map((el) => {
    s2.includes(el) ? answer++ : "";
  });
  return answer;
}
