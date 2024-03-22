function solution(num_list, n) {
  var answer = [];
  for (i = 0; i < num_list.length; i += n) {
    //n이 3이면, 0~2인덱스까지 짜른 배열을 삽입하도록
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
}
