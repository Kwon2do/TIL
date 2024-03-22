function solution(n) {
  let sum = 1;
  let num = 1;
  while (sum < n) {
    sum *= num;
    if (sum < n) {
      num++;
    } else if (sum == n) {
    } else {
      num--;
    }
  }
  return num;
}

//위에꺼 깔끔하게 수정
function solution(n) {
  let sum = 1;
  let num = 1;
  while (sum < n) {
    sum *= num;
    sum < n ? num++ : sum == n ? "" : num--;
  }
  return num;
}
