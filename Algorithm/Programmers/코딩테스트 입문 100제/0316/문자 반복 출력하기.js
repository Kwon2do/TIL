function solution(my_string, n) {
  let arr = my_string.split("");
  let answer = "";
  arr.map((el) => {
    for (i = 0; i < n; i++) answer += el;
    //el.repeat(n);
  });
  return answer;
}

//문자열 join으로 만들어줄 수도 있음.
