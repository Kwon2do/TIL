function solution(before, after) {
  //순서는 다르지만, 들어있는 요소가 같은지만 확인해주면 됨
  let arr1 = before.split("").sort();
  let arr2 = after.split("").sort();
  let answer = 1;
  arr1.map((el, index) => {
    el == arr2[index] ? "" : (answer = 0);
  });
  return answer;
}
