function solution(numbers) {
  let first_max = -1;
  let second_max = -1;
  //최댓값 중복인 경우를 대비
  let count = 0;
  numbers.map((el) => (el > first_max ? (first_max = el) : ""));
  numbers.map((el) => {
    el == first_max ? count++ : "";
    if (el != first_max) {
      el > second_max ? (second_max = el) : "";
    } else if (count == 2) {
      second_max = first_max;
    }
  });
  return first_max * second_max;
}

//내림차순 정렬 이용
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
