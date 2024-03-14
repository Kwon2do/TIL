function solution(array, n) {
  var answer = 0;
  answer = array.filter((element) => "a" === element).length;
  return answer;
}
