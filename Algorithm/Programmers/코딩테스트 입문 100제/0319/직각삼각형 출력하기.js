//터미널 또는 다른 입력 소스로부터 사용자 입력을 읽어올 때 사용됩니다.
const readline = require("readline");
//readline 모듈의 createInterface 메서드를 사용하여 입력 및 출력 스트림을 설정
//process.stdin은 표준 입력(stdin)으로부터의 입력을 받고, process.stdout은 표준 출력(stdout)으로 메시지를 출력
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
//rl.on('line', ...)은 사용자가 엔터를 입력할 때마다 호출됩니다. 입력된 줄은 공백을 기준으로 나누어 배열에 저장됩니다.
//rl.on('close', ...)는 사용자가 입력을 마치고 프로그램을 종료할 때 호출됩니다. 이때, 배열의 첫 번째 요소를 출력합니다.
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  let answer = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
});
