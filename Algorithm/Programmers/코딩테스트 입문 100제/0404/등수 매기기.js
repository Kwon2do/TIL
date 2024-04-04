function solution(score) {
  //일단 다 공동 1위로 통일
  let answer = new Array(score.length).fill(1);
  //평균값별로 담은 배열 생성
  const arr = score.map((el) => (el[0] + el[1]) / 2);
  //하나씩 돌면서 만약에 더 큰 게 존재한다 -> 순위 증가(밀려남)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

//다른 사람 풀이
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
