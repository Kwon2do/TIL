function solution(my_string) {
  //대문자 65~90 , 소문자 97~122
  //소문자가 대문자보다 큼
  let arr = my_string.split("");
  let answer = "";
  arr.map((el) => {
    el < "a" ? (answer += el.toLowerCase()) : (answer += el.toUpperCase());
  });
  return answer;
}
