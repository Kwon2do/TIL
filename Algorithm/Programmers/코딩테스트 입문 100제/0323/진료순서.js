//최초
function solution(emergency) {
  //중요도 순서대로 내림차순 정렬
  let answer = [...emergency];
  let arr = emergency.sort((a, b) => b - a);
  arr.map((el, index) => {
    //수정하면서 값이 바뀌니까 문제 발생
    answer[answer.indexOf(el)] = index + 1;
  });
  return answer;
}

//수정
function solution(emergency) {
  //중요도 순서대로 내림차순 정렬
  let answer = [...emergency];
  let answer2 = [];
  let arr = emergency.sort((a, b) => b - a);
  arr.map((el, index) => {
    answer2[answer.indexOf(el)] = index + 1;
  });
  return answer2;
}
