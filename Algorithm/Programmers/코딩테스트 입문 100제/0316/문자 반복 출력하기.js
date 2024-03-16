function solution(my_string, n) {
  let arr = my_string.split("");
  let answer = "";
  arr.map((el) => {
    for (i = 0; i < n; i++) answer += el;
  });
  return answer;
}
