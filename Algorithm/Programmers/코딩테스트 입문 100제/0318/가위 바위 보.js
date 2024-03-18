function solution(rsp) {
  //2-0, 0-5, 5-2
  let arr = rsp.split("").map(Number);
  var answer = "";
  arr.map((el) => {
    el === 2 ? (answer += "0") : el === 0 ? (answer += "5") : (answer += "2");
  });
  return answer;
}
