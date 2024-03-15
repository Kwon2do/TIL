function solution(sides) {
  let max = 0;
  let sum = 0;
  sides.map((el) => {
    el > max ? (max = el) : "";
  });
  sides.map((el) => (sum += el));
  return sum > 2 * max ? 1 : 2;
}

//Sort 이용
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
