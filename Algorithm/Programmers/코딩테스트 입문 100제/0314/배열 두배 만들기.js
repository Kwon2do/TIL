function solution(numbers) {
  var answer = [];
  numbers.map((el, index) => {
    answer[index] = el * 2;
  });
  return answer;
}
