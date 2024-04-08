function solution(quiz) {
  let answer = [];
  quiz.map((el) => {
    let arr = el.split(" ");
    if (arr[1] == "+") {
      Number(arr[arr.indexOf("+") - 1]) + Number(arr[arr.indexOf("+") + 1]) ==
      Number(arr[arr.length - 1])
        ? answer.push("O")
        : answer.push("X");
    } else if (arr[1] == "-") {
      Number(arr[0]) - Number(arr[2]) == Number(arr[arr.length - 1])
        ? answer.push("O")
        : answer.push("X");
    }
  });

  return answer;
}
