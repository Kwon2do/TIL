function solution(numbers) {
  let string = numbers.split("");
  let answer = "";
  let arr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  string.map((el, index) => {
    if (el == "o") {
      if (string[index + 1] == "n" && string[index + 2] == "e") {
        answer += "1";
      }
    } else if (el == "t") {
      if (string[index + 1] == "w" && string[index + 2] == "o") {
        answer += "2";
      }
      if (string[index + 1] == "h" && string[index + 2] == "r") {
        answer += "3";
      }
    } else if (el == "f") {
      if (string[index + 1] == "o") {
        answer += "4";
      }
      if (string[index + 1] == "i") {
        answer += "5";
      }
    } else if (el == "s") {
      if (string[index + 1] == "i") {
        answer += "6";
      }
      if (string[index + 1] == "e" && string[index + 2] == "v") {
        answer += "7";
      }
    } else if (el == "e") {
      if (string[index + 1] == "i" && string[index + 2] == "g") {
        answer += "8";
      }
    } else if (el == "n") {
      if (string[index + 1] == "i" && string[index + 2] == "n") {
        answer += "9";
      }
    } else if (el == "z") {
      if (string[index + 1] == "e" && string[index + 2] == "r") {
        answer += "0";
      }
    }
  });
  return Number(answer);
}

//다른 사람 풀이
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

//다른 사람 풀이2
function solution(numbers) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}
