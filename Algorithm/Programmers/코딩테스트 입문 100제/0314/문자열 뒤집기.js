function solution(my_string) {
  var answer = [];
  answer = my_string.split("").reverse();
  return answer.join("");
}

//Spread 연산자 사용
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
