function solution(n) {
  //나눠떨어지는 것이 3개 이상이면 됨
  var answer = 0;
  //1~n까지 담김
  let arr = Array(n)
    .fill(1)
    .map((el, index) => el + index);
  let arr2 = arr;
  arr.forEach((el) => {
    let tmp = 0;
    for (i = 0; i < arr.length; i++) {
      el % arr2[i] == 0 ? tmp++ : "";
    }
    tmp > 2 ? answer++ : "";
  });
  return answer;
}
