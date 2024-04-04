function solution(n) {
  let answer = 0;
  //1씩 증가하다가
  for (let i = 1; i <= n; i++) {
    answer += 1;
    //만약에, 3의배수이거나 3을 포함하면 answer에 1을 더 증가시킴
    while (true) {
      if (answer % 3 === 0 || String(answer).includes("3")) {
        answer += 1;
        continue;
      }
      //그렇지않으면 그냥 빠져나감
      break;
    }
  }
  return answer;
}

//다른 사람 풀이
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
