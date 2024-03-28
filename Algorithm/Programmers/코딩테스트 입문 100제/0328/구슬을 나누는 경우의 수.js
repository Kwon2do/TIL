function solution(balls, share) {
  //balls C share
  let balls_factorial = 1;
  let share_factorial = 1;
  //ball 5, share 3
  //5 4 3
  for (i = balls; i > balls - share; i--) {
    balls_factorial *= i;
  }
  for (i = share; i > 0; i--) {
    share_factorial *= i;
  }
  let answer = balls_factorial / share_factorial;
  return answer;
}

//다른 사람 풀이
const factorial = (num) =>
  Array.from({ length: num }, (_, i) => i + 1).reduce((a, c) => (a *= c), 1);

const solution = (n, m) =>
  Math.round(factorial(n) / (factorial(n - m) * factorial(m)));
