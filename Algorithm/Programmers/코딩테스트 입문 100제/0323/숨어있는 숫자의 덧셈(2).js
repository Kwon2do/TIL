function solution(my_string) {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    let tmp = 0;
    //Number.isNaN : 인자로 들어온 값이 NaN이여야만 참 반환
    while (!Number.isNaN(Number(my_string[i]))) {
      //숫자가 연결되어있는 것 다 tmp에 담아둠
      tmp += my_string[i];
      i++;
    }
    answer += Number(tmp);
  }
  return answer;
}
