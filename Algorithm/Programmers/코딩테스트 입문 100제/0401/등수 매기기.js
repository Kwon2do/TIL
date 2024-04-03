function solution(score) {
  //[75,70,55,65]
  let arr = [];
  score.map((el, index) => {
    arr[index] = (el[0] + el[1]) / 2;
  });
  let arr2 = [];
  score.map((el, index) => {
    arr2[index] = (el[0] + el[1]) / 2;
  });
  //[75,70,65,55]
  arr2.sort((a, b) => b - a);
  arr2.map((el, index) => {
    arr[arr.indexOf(el)] = index + 1;
  });
  return arr2;
}
