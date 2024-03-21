function solution(numbers, direction) {
  //left : 인덱스를 한칸씩 - , index = 0 일때는 마지막 인덱스로 가도록
  //right : 인덱스를 한칸씩 +, 마지막 인덱스인 경우 첫 번째로 가도록
  let arr = [...numbers];
  if (direction == "left") {
    numbers.map((_, index) => {
      if (index == 0) {
        arr[index] = numbers[index + 1];
        arr[arr.length - 1] = numbers[index];
        arr.map((el, index) => {
          if (index > 0 && index < arr.length - 1)
            arr[index] = numbers[index + 1];
        });
      }
    });
  }
  //direction == "right"
  else {
    numbers.map((_, index) => {
      for (i = 0; i < arr.length; i++) {
        if (index == arr.length - 1) {
          arr[0] = numbers[numbers.length - 1];
        } else arr[index + 1] = numbers[index];
      }
    });
  }
  return arr;
}

//다른 풀이
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    //unshift가 앞에다가 넣음
    numbers.unshift(numbers.pop());
  } else {
    //shift가 맨 앞에 원소를 뺌
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
