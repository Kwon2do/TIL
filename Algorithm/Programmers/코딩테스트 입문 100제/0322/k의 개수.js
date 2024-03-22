function solution(i, j, k) {
  //i~j까지 담기
  let arr = Array(j - i + 1)
    .fill(i)
    .map((el, index) => el + index)
    .map(String);
  //만약, 11인경우는 2개로 카운트 되어야 하는 것 고려
  let answer = 0;
  arr.map((el) => {
    for (let i = 0; i < el.length; i++) {
      el[i] == k ? answer++ : "";
    }
  });
  return answer;
}
