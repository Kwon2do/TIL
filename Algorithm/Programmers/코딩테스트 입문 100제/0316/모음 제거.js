function solution(my_string) {
  let arr = ["a", "e", "i", "o", "u"];
  let answer = "";
  let string_arr = my_string.split("");
  for (i = 0; i < string_arr.length; i++) {
    if (
      !(
        string_arr[i] == arr[0] ||
        string_arr[i] == arr[1] ||
        string_arr[i] == arr[2] ||
        string_arr[i] == arr[3] ||
        string_arr[i] == arr[4]
      )
    ) {
      answer += string_arr[i];
    }
  }
  return answer;
}
