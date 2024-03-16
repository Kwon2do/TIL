function solution(num_list) {
  let answer = [];
  let count_even = 0;
  let count_odd = 0;
  num_list.map((el) => {
    el % 2 == 0 ? count_even++ : count_odd++;
  });
  answer[0] = count_even;
  answer[1] = count_odd;
  return answer;
}
