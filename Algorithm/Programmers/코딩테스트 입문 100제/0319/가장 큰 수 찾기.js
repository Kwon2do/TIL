function solution(array) {
  var answer = [];
  let max = 0;
  array.map((el, index) => {
    if (el > max) {
      max = el;
      answer[0] = max;
      answer[1] = index;
    }
  });
  return answer;
}
