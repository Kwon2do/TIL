function solution(hp) {
  //5, 3 , 1
  var answer =
    Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + Math.trunc((hp % 5) % 3);
  return answer;
}
