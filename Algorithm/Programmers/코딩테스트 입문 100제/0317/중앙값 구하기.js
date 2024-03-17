function solution(array) {
  array.sort((a, b) => a - b);
  return array[Math.ceil(array.length / 2) - 1];
}
