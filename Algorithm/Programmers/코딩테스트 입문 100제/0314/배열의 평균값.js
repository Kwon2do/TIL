function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

//for-of 사용
function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

//reduce 사용
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
