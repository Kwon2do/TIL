function solution(numbers, k) {
  //k번째 => k*2-1번째 => k*2-1 % numbers.length
  //5번째 => 9번째 => 4번째
  //2번째고, nubers.length가 3
  //[1,2,3]
  let index = 0;
  (k * 2 - 1) % numbers.length != 0
    ? (index = (k * 2 - 1) % numbers.length)
    : (index = numbers.length);
  var answer = numbers[index - 1];
  return answer;
}
