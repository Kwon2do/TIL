function solution(strlist) {
  let answer = [];
  strlist.map((el, index) => {
    answer[index] = el.length;
  });
  return answer;
}
