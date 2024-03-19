function solution(my_string) {
  var answer = [];
  let arr = my_string.split("").map(Number);
  arr.map((el) => {
    // 0은 false를 반환함
    el || el === 0 ? answer.push(el) : "";
  });
  answer.sort((a, b) => a - b);
  return answer;
}
