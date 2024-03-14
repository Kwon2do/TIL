function solution(array, height) {
  let count = 0;
  array.map((el) => (el > height ? count++ : ""));
  return count;
}

//filter 사용
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

solution([1, 2, 3, 4], 2);
