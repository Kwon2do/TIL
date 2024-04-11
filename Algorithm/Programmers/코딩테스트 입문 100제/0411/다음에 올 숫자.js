function solution(common) {
  //첫 번째 원소의 제곱이거나, 일정 수만큼 증가거나
  let answer = 0;
  let gap = common[1] - common[0];
  //기본세팅 등차수열
  let isCheck = true;
  for (let i = 0; i < common.length; i++) {
    if (common[i] != common[0] + gap * i) {
      isCheck = false;
    }
  }
  isCheck
    ? (answer = common[0] + gap * common.length)
    : (answer = (common[common.length - 1] * common[1]) / common[0]);
  return answer;
}
