function solution(array) {
  let max = 0;
  let idx = 0;
  let count = 0;
  let answer = 0;
  // 배열의 길이가 1이면 해당 요소 반환
  if (array.length === 1) {
    return array[0];
  }
  let origin = array.sort((a, b) => a - b);
  //set 써서 중복제거하니까 순회하면서 비교하는 게 안됐음
  let arr = origin.filter((el, index) => origin.indexOf(el) === index);
  for (let i = 0; i < arr.length; i++) {
    let tmp = 0;
    for (let j = 0; j < origin.length; j++) {
      arr[i] == origin[j] ? tmp++ : "";
    }
    if (tmp > count) {
      answer = arr[i];
      count = tmp;
    } else if (tmp == count) {
      answer = -1;
    }
  }
  return answer;
}
