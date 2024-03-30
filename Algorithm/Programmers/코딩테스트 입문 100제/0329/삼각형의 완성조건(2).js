function solution(sides) {
  //나머지 하나가 가장 긴 변인 경우
  //sides 배열에 이미 가장 긴 변이 있는 경우

  let count = 0;
  let max = 0;
  let number = 1;
  sides[0] > sides[1] ? (max = sides[0]) : (max = sides[1]);
  //나머지 하나가 가장 긴 변인 경우
  while (number < sides[0] + sides[1] || number == max) {
    count++;
    number++;
  }
  number = 1;
  //sides 배열에 이미 가장 긴 변이 있는 경우
  while (max < sides[0] + sides[1] - max + number) {
    count++;
    number++;
  }
  return count;
}

//2번째 방법..
function solution(sides) {
  //나머지 하나가 가장 긴 변인 경우
  //sides 배열에 이미 가장 긴 변이 있는 경우

  let count = 0;
  let max = 0;
  sides[0] > sides[1] ? (max = sides[0]) : (max = sides[1]);
  let number1 = Array(sides[0] + sides[1])
    .fill(1)
    .map((el, index) => el + index);
  //나머지 하나가 가장 긴 변인 경우 개수
  number1.filter((el) => {
    el >= max && el < sides[0] + sides[1];
  });
  //sides 배열에 이미 가장 긴 변이 있는 경우
  let number2 = Array(max)
    .fill(1)
    .map((el, index) => el + index);
  number2.filter((el) => {
    el <= max && el + sides[0] + sides[1] > 2 * max;
  });
  let answer = number1.length + number2.length;
  return answer;
}

//성공!
function solution(sides) {
  let answer = 0;
  sides = sides.sort((a, b) => a - b);
  //sides[1]이 가장 긴 변
  for (let i = sides[1] - 1; i + sides[0] > sides[1]; i--) {
    answer++;
  }
  //다른 하나가 가장 긴 변일 때
  for (let i = sides[1]; i < sides[0] + sides[1]; i++) {
    answer++;
  }
  return answer;
}
