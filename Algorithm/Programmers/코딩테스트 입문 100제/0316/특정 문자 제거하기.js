function solution(my_string, letter) {
  var arr = my_string.split("");
  var answer = "";
  arr.map((el) => {
    el != letter ? (answer += el) : "";
  });
  return answer;
}
