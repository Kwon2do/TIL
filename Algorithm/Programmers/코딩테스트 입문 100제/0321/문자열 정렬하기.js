//최초 풀이(오답)
//자바스크립트에서 string은 불변이기때문에 인덱스로 요소끼리 교환이 불가함.
function solution(my_string) {
  let answer = my_string.toLowerCase();
  for (i = 0; i < answer.length; i++) {
    for (j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        let tmp = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = tmp;
      }
    }
  }
  return answer;
}

function solution(my_string) {
  let answer = my_string.toLowerCase().split("");
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        let tmp = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = tmp;
      }
    }
  }
  return answer.join("");
}
