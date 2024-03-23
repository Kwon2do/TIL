function solution(s) {
  let arr = s.split("");
  let answer = [];
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      arr[i] == arr[j] ? count++ : "";
    }
    count >= 2 ? "" : answer.push(arr[i]);
  }
  answer.sort();
  return answer.join("");
}
