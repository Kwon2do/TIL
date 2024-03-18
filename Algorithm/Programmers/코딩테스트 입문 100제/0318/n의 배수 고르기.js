function solution(n, numlist) {
  let arr = numlist.map(Number).filter((e) => e % n == 0);
  return arr;
}
