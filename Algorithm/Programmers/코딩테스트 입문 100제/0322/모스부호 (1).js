function solution(letter) {
  let mos = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  //공백을 기준으로 배열 초기화
  let letter_arr = letter.split(" ");
  let answer = "";
  letter_arr.map((el) => {
    for (i = 0; i < mos.length; i++) {
      el == mos[i] ? (answer += "abcdefghijklmnopqrstuvwxyz"[i]) : "";
    }
  });
  return answer;
}
