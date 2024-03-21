function solution(my_string, num1, num2) {
  let string = my_string.split("");
  let tmp = string[num1];
  string[num1] = string[num2];
  string[num2] = tmp;
  return string.join("");
}

//다른 풀이
function solution(my_string, num1, num2) {
  return my_string
    .split("")
    .map((v, i) =>
      i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v
    )
    .join("");
}
