function solution(keyinput, board) {
  //map 영역
  let map = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  let x = 0;
  let y = 0;
  keyinput.map((el) => {
    if (el == "left" && x - 1 >= map[0] * -1) {
      x = x - 1;
    } else if (el == "right" && x + 1 <= map[0]) {
      x = x + 1;
    } else if (el == "up" && y + 1 <= map[1]) {
      y = y + 1;
    } else if (el == "down" && y - 1 >= map[1] * -1) {
      y = y - 1;
    }
  });
  let answer = [x, y];
  return answer;
}
