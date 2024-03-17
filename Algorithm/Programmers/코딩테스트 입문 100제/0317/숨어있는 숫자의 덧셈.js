function solution(my_string) {
  var answer = 0;
  let arr = my_string.split("").map(Number);
  arr.map((el) => {
    el ? (answer += el) : "";
  });
  return answer;
}
