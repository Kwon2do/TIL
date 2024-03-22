function solution(order) {
  let arr = String(order).split("");
  let answer = 0;
  arr.map((el) => {
    el == "3" || el == "6" || el == "9" ? answer++ : "";
  });
  return answer;
}
