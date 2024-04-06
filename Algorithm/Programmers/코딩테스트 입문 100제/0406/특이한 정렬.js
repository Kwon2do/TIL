function solution(numlist, n) {
  //1,2,3,4,5,6
  let answer = numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
  //거리가 같을 때 크기 순
  answer.map((el, index) => {
    if (Math.abs(el - n) == Math.abs(answer[index + 1] - n)) {
      if (el < answer[index + 1]) {
        let tmp = el;
        answer[index] = answer[index + 1];
        answer[index + 1] = el;
      }
    }
  });
  return answer;
}
