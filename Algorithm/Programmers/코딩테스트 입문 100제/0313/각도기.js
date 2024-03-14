function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else if (angle == 180) {
    /*else*/ return 4;
  }
}

//다른 사람 풀이1) filter사용
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

//다른 사람 풀이2) 삼항연산자 사용
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

//다른 사람 풀이3) switch문 + 삼항연산자
function solution(angle) {
  switch (angle) {
    case 90:
      return 2;
    case 180:
      return 4;
    default:
      return angle > 0 && angle < 90 ? 1 : 3;
  }
}
