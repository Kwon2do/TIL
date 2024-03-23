function solution(array) {
  let arr = array.join("").split("");
  let answer = 0;
  answer = arr.filter((e) => e == "7");
  return answer.length;
}
