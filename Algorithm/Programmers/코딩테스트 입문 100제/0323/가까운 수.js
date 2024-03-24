//처음 아이디어
// function solution(array, n) {
//   var answer = 0;
//   let gap = 100;
//   array.map((el, index) => {
//     if (Math.abs(n - el) <= gap) {
//       answer = el;
//       gap = Math.abs(n - el);
//     }
//   });
//   return answer;
// }

//제출코드
function solution(array, n) {
  //
  let arr = [...array, n].sort((a, b) => a - b);
  let answer = 0;
  let nindex;
  arr.map((el, index) => {
    el == n ? (nindex = index) : "";
  });

  if (nindex != arr.length - 1 && nindex != 0) {
    n - arr[nindex - 1] > arr[nindex + 1] - n
      ? (answer = arr[nindex + 1])
      : (answer = arr[nindex - 1]);
  } else if (nindex == 0) {
    answer = arr[nindex + 1];
  } else {
    answer = arr[nindex - 1];
  }
  return answer;
}
