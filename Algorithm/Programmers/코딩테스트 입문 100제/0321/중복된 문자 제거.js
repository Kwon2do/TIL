function solution(my_string) {
  //새로운 배열 만들어놓고, 있는 요소인지 확인하면서 누적

  let arr = [...my_string];
  let answer = [];
  arr.map((el) => {
    answer.includes(el) ? "" : answer.push(el);
  });
  return answer.join("");
}
