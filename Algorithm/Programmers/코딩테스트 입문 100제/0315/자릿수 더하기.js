function solution(n) {
  let arr = String(n).split("");
  let result = 0;
  arr.map((el) => (result += Number(el)));
  return result;
}
