function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  let test = "";
  for (var i = 0; i < babbling.length; i++) {
    //검사할 단어
    test = babbling[i];
    //단어에 word 요소가 포함되어 있다면 계속 검사 진행
    while (
      test.includes(word[0]) ||
      test.includes(word[1]) ||
      test.includes(word[2]) ||
      test.includes(word[3])
    ) {
      word.map((el) => {
        if (test.includes(el)) {
          /*
          공백으로 하게 되면, 떨어져있던 알파벳들이 붙어서 네 가지 발음 중
          하나를 구성할 수 있어서(예시:"wyeoo") 띄어쓰기로 구분해주고 
          마지막에 trim()으로 공백 제거 후 검사
          */
          test = test.replace(el, " ");
          if (!test.trim()) {
            answer++;
            return;
          }
        }
      });
    }
  }
  return answer;
}
