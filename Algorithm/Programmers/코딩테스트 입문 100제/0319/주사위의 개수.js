function solution(box, n) {
  //가로, 세로, 높이를 비교
  return (
    Math.trunc(box[0] / n) * Math.trunc(box[1] / n) * Math.trunc(box[2] / n)
  );
}
