function solution(numbers) {
  //가장 작은 수 * 두 번째로 작은수
  //가장 큰 수 * 두 번째로 큰 수
  //비교
  var answer = 0;
  numbers.sort((a, b) => b - a);
  numbers[0] * numbers[1] >
  numbers[numbers.length - 1] * numbers[numbers.length - 2]
    ? (answer = numbers[0] * numbers[1])
    : (answer = numbers[numbers.length - 1] * numbers[numbers.length - 2]);
  return answer;
}
