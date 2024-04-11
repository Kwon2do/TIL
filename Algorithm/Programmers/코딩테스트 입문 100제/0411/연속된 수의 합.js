function solution(num, total) {
  let start = 0;
  let test = new Array(num)
    .fill(0)
    .map((e, i) => i)
    .reduce((a, b) => a + b, 0);

  while (test != total) {
    if (test < total) start++;
    else start--;
    test = new Array(num)
      .fill(0)
      .map((_, index) => index + start)
      .reduce((a, b) => a + b, 0);
  }
  return new Array(num).fill(0).map((_, index) => index + start);
}
