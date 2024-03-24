//2,6,11,13,14 왜 안 되 는 건 데
function solution(s) {
  let arr = s.split(" ").map(Number);
  let answer = 0;
  arr.map((el, index) => {
    el ? (answer += el) : (answer -= arr[index - 1]);
  });
  return answer;
}

//map(Number)안하고 Z랑 비교하니까 해결 됨
function solution(s) {
  let arr = s.split(" ");
  let answer = 0;
  arr.map((el, index) => {
    el != "Z" ? (answer += Number(el)) : (answer -= Number(arr[index - 1]));
  });
  return answer;
}
