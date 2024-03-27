function solution(my_string) {
  var arr = my_string.split(" ");
  let result = Number(arr[0]);
  // 2+3-4
  arr.map((el, index) => {
    if (el == "+") {
      result = result + Number(arr[index + 1]);
    } else if (el == "-") {
      result = result - Number(arr[index + 1]);
    }
  });
  return result;
}
