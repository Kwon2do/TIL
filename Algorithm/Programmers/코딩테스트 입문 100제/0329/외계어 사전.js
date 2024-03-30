function solution(spell, dic) {
  let arr = [...spell].sort();
  let answer = 0;
  let count = 0;
  for (el of dic) {
    let tmp = el.split("").sort();
    if (el.length == arr.length) {
      for (let i = 0; i < arr.length; i++) {
        tmp[i] == arr[i] ? count++ : "";
      }
    }
    count == arr.length ? (answer = 1) : (answer = 2);
    if (answer == 1) {
      break;
    }
    count = 0;
  }
  return answer;
}
